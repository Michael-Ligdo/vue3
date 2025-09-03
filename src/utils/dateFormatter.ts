export function dateFormatter(dateStr: string): string {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}