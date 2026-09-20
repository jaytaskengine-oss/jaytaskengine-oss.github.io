export function getPageCount(totalItems, pageSize) {
  if (!Number.isInteger(totalItems) || totalItems < 0) {
    throw new Error("totalItems must be a non-negative integer");
  }

  if (!Number.isInteger(pageSize) || pageSize <= 0) {
    throw new Error("pageSize must be a positive integer");
  }

  return totalItems === 0 ? 0 : Math.ceil(totalItems / pageSize);
}
