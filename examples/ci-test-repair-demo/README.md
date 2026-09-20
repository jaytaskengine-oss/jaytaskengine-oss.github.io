# CI / Test Repair Demo

A self-directed JayTaskEngine portfolio demonstration showing how a small failing test/CI problem can be isolated, repaired, and protected with regression coverage.

## Scenario

A username-normalization helper incorrectly handled whitespace and mixed-case input. The bug caused deterministic test failures in CI.

## Repair

- Reproduced the failure with focused automated tests
- Corrected normalization behavior
- Added regression coverage for whitespace, casing, and invalid input
- Added a GitHub Actions workflow that runs the test suite on push and pull request
- Kept the change small and reviewable

## Run locally

```bash
npm test
```

## CI

The included GitHub Actions workflow installs no external dependencies and runs the built-in Node.js test runner.

This is a self-directed portfolio demo, not client work.
