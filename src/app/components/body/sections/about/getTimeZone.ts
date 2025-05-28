export function getCurrentUtcOffset(): number {
  const offsetInMinutes = new Date().getTimezoneOffset();
  return -(offsetInMinutes / 60); // Convert to positive UTC offset
}