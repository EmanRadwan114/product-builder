// ^ JS DOC
/**
 *
 * @param {string} txt - The input text to be sliced
 * @param {number} [max = 70] - The maximum length that should not be exceeded
 * @returns The input text with ... at the end if sliced
 */

export const txtSlice = (txt: string, max: number = 70) => {
  if (txt.length >= 50) return `${txt.slice(0, max)}...`;
  return txt;
};
