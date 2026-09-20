import test from "node:test";
import assert from "node:assert/strict";
import { normalizeUsername } from "../src/normalizeUsername.js";

test("normalizes mixed-case usernames", () => {
  assert.equal(normalizeUsername("JordanA"), "jordana");
});

test("trims surrounding whitespace", () => {
  assert.equal(normalizeUsername("  JordanA  "), "jordana");
});

test("rejects an empty username", () => {
  assert.throws(() => normalizeUsername("   "), /cannot be empty/);
});

test("rejects non-string input", () => {
  assert.throws(() => normalizeUsername(null), TypeError);
});
