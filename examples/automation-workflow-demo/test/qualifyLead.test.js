import test from "node:test";
import assert from "node:assert/strict";
import { qualifyLead } from "../src/qualifyLead.js";

test("marks a strong-fit lead as high priority", () => {
  const result = qualifyLead({
    name: "Acme Co",
    email: "OPS@ACME.EXAMPLE",
    companySize: 42,
    needs: ["API Integration", "Automation"],
  });

  assert.deepEqual(result, {
    name: "Acme Co",
    email: "ops@acme.example",
    priority: "high",
    nextAction: "personalized outreach",
  });
});

test("keeps a weaker lead in normal follow-up", () => {
  const result = qualifyLead({
    name: "Small Co",
    email: "hello@small.example",
    companySize: 3,
    needs: ["website refresh"],
  });

  assert.equal(result.priority, "normal");
  assert.equal(result.nextAction, "standard follow-up");
});

test("rejects invalid email input", () => {
  assert.throws(
    () => qualifyLead({ name: "Acme", email: "invalid" }),
    /valid email is required/
  );
});
