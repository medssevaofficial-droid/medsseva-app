/**
 * Clamp a value between min and max
 */
export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

/**
 * Format a number with + suffix
 */
export const formatStat = (value: string): string => value;

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Scroll to element by ID
 */
export const scrollToElement = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 90;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

/**
 * Truncate text
 */
export const truncate = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
};

/**
 * Generate initials from name
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

/**
 * Check if a path is external
 */
export const isExternalLink = (href: string): boolean =>
  href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:');
