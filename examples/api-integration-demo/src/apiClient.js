const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function createApiClient({
  baseUrl,
  token,
  fetchImpl = fetch,
  maxRetries = 2,
  retryDelayMs = 50,
}) {
  if (!baseUrl) throw new Error("baseUrl is required");

  const normalizedBaseUrl = baseUrl.replace(/\/$/, "");

  return {
    async request(path, options = {}) {
      const url = `${normalizedBaseUrl}/${String(path).replace(/^\//, "")}`;

      const headers = {
        Accept: "application/json",
        ...options.headers,
      };

      if (token) headers.Authorization = `Bearer ${token}`;

      let body = options.body;
      if (body && typeof body === "object" && !(body instanceof Uint8Array)) {
        headers["Content-Type"] ??= "application/json";
        body = JSON.stringify(body);
      }

      let attempt = 0;

      while (true) {
        const response = await fetchImpl(url, {
          ...options,
          headers,
          body,
        });

        const shouldRetry =
          (response.status === 429 || response.status >= 500) &&
          attempt < maxRetries;

        if (shouldRetry) {
          attempt += 1;
          await sleep(retryDelayMs * attempt);
          continue;
        }

        const text = await response.text();
        let data = null;

        if (text) {
          try {
            data = JSON.parse(text);
          } catch {
            data = text;
          }
        }

        if (!response.ok) {
          const error = new Error(
            `API request failed with status ${response.status}`
          );
          error.status = response.status;
          error.data = data;
          throw error;
        }

        return {
          status: response.status,
          data,
        };
      }
    },
  };
}
