export {};

declare global {
  /**
   * Represent a string like `2021-01-08T14:42:34.678`
   */
  type TDate = `${number}-${number}-${number}T${number}:${number}:${number}.${number}`;
}
