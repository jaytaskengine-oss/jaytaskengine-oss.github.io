import test from "node:test";
import assert from "node:assert/strict";
import { createApiClient } from "../src/apiClient.js";

test("adds auth header and parses JSON", async () => {
  let captured;

  const fetchImpl = async (url, options) => {
    captured = { url, options };
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  };

  const client = createApiClient({
    baseUrl: "https://api.example.com/",
    token: "demo-token",
    fetchImpl,
  });

  const result = await client.request("/items");

  assert.equal(captured.url, "https://api.example.com/items");
  assert.equal(captured.options.headers.Authorization, "Bearer demo-token");
  assert.deepEqual(result.data, { ok: true });
});

test("serializes object request bodies", async () => {
  let capturedBody;

  const fetchImpl = async (_url, options) => {
    capturedBody = options.body;
    return new Response(null, { status: 204 });
  };

  const client = createApiClient({
    baseUrl: "https://api.example.com",
    fetchImpl,
  });

  await client.request("items", {
    method: "POST",
    body: { name: "demo" },
  });

  assert.equal(capturedBody, JSON.stringify({ name: "demo" }));
});

test("retries a transient server error", async () => {
  let calls = 0;

  const fetchImpl = async () => {
    calls += 1;
    if (calls === 1) {
      return new Response(JSON.stringify({ error: "temporary" }), {
        status: 503,
      });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  };

  const client = createApiClient({
    baseUrl: "https://api.example.com",
    fetchImpl,
    retryDelayMs: 0,
  });

  const result = await client.request("health");

  assert.equal(calls, 2);
  assert.deepEqual(result.data, { ok: true });
});

test("throws a useful error for a failed request", async () => {
  const fetchImpl = async () =>
    new Response(JSON.stringify({ error: "bad request" }), { status: 400 });

  const client = createApiClient({
    baseUrl: "https://api.example.com",
    fetchImpl,
  });

  await assert.rejects(
    () => client.request("items"),
    (error) => {
      assert.equal(error.status, 400);
      assert.deepEqual(error.data, { error: "bad request" });
      return true;
    }
  );
});
