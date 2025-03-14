const noTitleCaseWords = [
  'a',
  'and',
  'as',
  'at',
  'but',
  'by',
  'down',
  'for',
  'from',
  'if',
  'in',
  'into',
  'like',
  'near',
  'nor',
  'of',
  'off ',
  'on',
  'once',
  'onto',
  'or',
  'over',
  'past',
  'so',
  'the',
  'than',
  'that',
  'to',
  'upon',
  'when',
  'with',
  'yet'
];

/**
 * Function for converting text to it's titlecase variant.
 * @param text the input text.
 * @returns the title-cased output text.
 */
export function toTitleCase(text: string) {
  let isFirst = true;
  return text.replaceAll(/\S+\b/g, (word) => {
    const upper = word.toLocaleUpperCase();
    const lower = word.toLocaleLowerCase();
    if (!isFirst && noTitleCaseWords.includes(lower)) {
      return lower;
    }
    isFirst = false;
    return upper.substring(0, 1) + word.substring(1).toLocaleLowerCase();
  });
}

/**
 * Trim a string down to undefined if empty.
 * @param value the input value.
 * @returns the output string or undefined.
 */
export function trimToEmpty(value: string | undefined) {
  return value && value.trim().length > 0 ? value.trim() : undefined;
}

/**
 * Formats a string according to MC Forge it's TranslatableContents format specifiers.
 * @param format the format string.
 * @param args the list of format arguments.
 * @returns the formatted string.
 */
export function formatForgeString(format: string, ...args: string[]) {
  let formatIndex = 1;
  return format.replaceAll(/%(?:(\d+)\$)?([A-Za-z%]|$)/g, (match, valueId, formatKey) => {
    if (formatKey === '%' || match === '%' || match === '%%') {
      return '%';
    } else {
      const idx = valueId !== undefined ? parseInt(valueId) : formatIndex++;
      return args[idx - 1].toString();
    }
  });
}
