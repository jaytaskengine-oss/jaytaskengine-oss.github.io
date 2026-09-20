import test from "node:test";
import assert from "node:assert/strict";
import { getPageCount } from "../src/getPageCount.js";

test("handles exact division without an extra page", () => {
  assert.equal(getPageCount(20, 10), 2);
});

test("handles remainder items", () => {
  assert.equal(getPageCount(21, 10), 3);
});

test("handles empty collections", () => {
  assert.equal(getPageCount(0, 10), 0);
});

test("rejects invalid page size", () => {
  assert.throws(() => getPageCount(10, 0), /pageSize must be a positive integer/);
});
