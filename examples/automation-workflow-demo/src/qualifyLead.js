export function qualifyLead(input) {
  if (!input || typeof input !== "object") {
    throw new TypeError("lead input must be an object");
  }

  const { name, email, companySize = 0, needs = [] } = input;

  if (!name || typeof name !== "string") {
    throw new Error("name is required");
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    throw new Error("valid email is required");
  }

  const normalizedNeeds = Array.isArray(needs)
    ? needs.map((need) => String(need).toLowerCase())
    : [];

  const highIntent =
    normalizedNeeds.some((need) =>
      ["api integration", "automation", "ci/cd", "bug fix"].includes(need)
    ) && Number(companySize) >= 10;

  return {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    priority: highIntent ? "high" : "normal",
    nextAction: highIntent ? "personalized outreach" : "standard follow-up",
  };
}
