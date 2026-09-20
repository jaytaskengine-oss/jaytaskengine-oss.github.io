# Automation Workflow Demo

A self-directed JayTaskEngine portfolio demonstration showing a small business workflow that validates incoming lead data, assigns a simple priority score, and produces a clean follow-up queue.

## What it demonstrates

- Input validation
- Rule-based workflow automation
- Lead scoring
- Deterministic output
- Testable business logic
- Clear handoff format

## Example

Input:

```json
{
  "name": "Acme Co",
  "email": "ops@acme.example",
  "companySize": 42,
  "needs": ["api integration", "automation"]
}
```

Output:

```json
{
  "name": "Acme Co",
  "email": "ops@acme.example",
  "priority": "high",
  "nextAction": "personalized outreach"
}
```

Run tests:

```bash
npm test
```

This is a self-directed portfolio demo, not client work.
