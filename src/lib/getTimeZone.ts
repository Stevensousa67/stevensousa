export function getCurrentUtcOffset(): string {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    timeZoneName: 'shortOffset', // e.g., "GMT-4"
  });
  const parts = formatter.formatToParts(now);
  const offsetPart = parts.find((part) => part.type === 'timeZoneName');
  return offsetPart ? offsetPart.value.replace('GMT', 'UTC/GMT ') : 'UTC/GMT -5' // Fallback to EST if parsing fails
}