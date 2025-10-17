// ^ JS DOC
/**
 *
 * @param {string} txt - The input text to be sliced
 * @param {number} [max = 50] - The maximum length that should not be exceeded
 * @returns The input text with ... at the end if sliced
 */

export const sliceTxt = (txt: string, max: number = 50) => {
  if (txt.length >= 50) return `${txt.slice(0, max)}...`;
  return txt;
};

export const formatPrice = (price: string): string => {
  const [intPart, decPart] = price.split(".");
  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decPart ? `${formattedInt}.${decPart}` : formattedInt;
};
