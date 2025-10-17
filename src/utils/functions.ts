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

// ^ JS DOC
export const formatePrice = (price: string): string => {
  const priceInDec = (+price / 1000).toString().split("");
  const formatedPrice = priceInDec
    .splice(priceInDec.length - 1 / 2, 0, ",")
    .join();
  console.log(formatedPrice);

  return priceInDec[0] !== "0" ? priceInDec.join() : price;
};
