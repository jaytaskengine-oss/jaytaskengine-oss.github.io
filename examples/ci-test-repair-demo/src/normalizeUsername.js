export function normalizeUsername(value) {
  if (typeof value !== "string") {
    throw new TypeError("username must be a string");
  }

  const normalized = value.trim().toLowerCase();

  if (!normalized) {
    throw new Error("username cannot be empty");
  }

  return normalized;
}
