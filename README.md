# JayTaskEngine — Technical Proof

JayTaskEngine is a small technical-delivery operation focused on scoped automation, API integrations, workflow tooling, CI/test repair, debugging, and engineering overflow.

This repository is the **technical proof layer**, not the commercial storefront. Pricing, project scoping, research offers, and the Automation Starter Pack live on the WordPress business site:

- Services: https://jaytaskengine.wordpress.com/services/
- Offers: https://jaytaskengine.wordpress.com/offers/

## Technical demos

All examples below are **self-directed portfolio demonstrations unless explicitly stated otherwise**. They are not presented as client work.

### API Integration Demo
`examples/api-integration-demo`

Demonstrates:
- reusable REST API client structure
- configurable authorization headers
- JSON request/response handling
- retry behavior for rate limits and transient server errors
- clear errors for non-success responses
- dependency injection for testing
- Node.js built-in test runner

### Automation Workflow Demo
`examples/automation-workflow-demo`

Demonstrates:
- input validation
- deterministic workflow automation
- lead scoring and routing logic
- clean output/handoff format
- testable business rules

### CI / Test Repair Demo
`examples/ci-test-repair-demo`

Demonstrates:
- reproducing a failing test
- isolating root cause
- implementing a focused repair
- regression coverage
- GitHub Actions CI

### Bug-Fix / Debugging Demo
`examples/bug-fix-debugging-demo`

A small demonstration of bounded debugging and reviewable repair work.

## Delivery principles

1. **Bound the problem first.** Define inputs, expected output, constraints, environment, and acceptance criteria before implementation.
2. **Keep changes reviewable.** Prefer focused changes, explicit error handling, tests where useful, and clear documentation.
3. **Hand back control.** Deliver code and context without unnecessary lock-in.
4. **Do not fabricate proof.** Self-directed demos stay labeled as self-directed demos.

## Contact

For project scoping or technical overflow:

**jaytaskengine@gmail.com**

Business site: https://jaytaskengine.wordpress.com/
