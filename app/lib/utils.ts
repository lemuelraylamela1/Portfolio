// /lib/utils.ts

/**
 * Conditionally joins class names into a single string.
 * Handles falsy values like undefined, null, or false.
 * Useful for Tailwind CSS conditional classes.
 *
 * @param classes - array of class strings or falsy values
 * @returns string of classes separated by space
 *
 * @example
 * cn("px-4", isDark && "bg-black", !isDark && "bg-white")
 * // => "px-4 bg-black" if isDark is true
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
