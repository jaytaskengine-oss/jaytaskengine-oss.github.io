# Bug Fix / Debugging Demo

A self-directed JayTaskEngine portfolio demonstration showing how a narrow application bug can be reproduced, fixed, and protected with regression tests.

## Scenario

A pagination helper returned the wrong number of pages when total items were exactly divisible by page size, creating an extra empty page.

## Repair

- Reproduced the bug with targeted tests
- Corrected the page-count logic
- Added coverage for exact-division, remainder, empty, and invalid-input cases
- Kept the repair small and reviewable

## Run tests

```bash
npm test
```

This is a self-directed portfolio demo, not client work.
