export function getCurrentUtcOffset(): number {
  const offsetInMinutes = new Date().getTimezoneOffset();
  return -(offsetInMinutes / 60);
}