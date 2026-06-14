export type ClassValue = unknown;

export const cx = (...values: ClassValue[]): string =>
  values.filter((v): v is string => typeof v === "string" && v.length > 0).join(" ");
