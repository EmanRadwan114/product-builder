import type { IErrors, IValidation } from "../interfaces/interfaces";

/**
 *
 * @param product - The product object with title, description, imageURL and price properties
 * @returns The error object that has error messages corresponding to the current validation error
 */

export const addProductSchema = (product: IValidation) => {
  const { title, description, imageURL, price, colors } = product;

  const errors: IErrors = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: "",
  };

  //———————————————————————————————— Title Validation ————————————————————————————————
  if (!title.trim()) {
    errors.title = "Product title is required";
  } else if (title.length < 3 || title.length > 50) {
    errors.title =
      "Product title length should be between 3 and 50 characters length";
  }

  //———————————————————————————————— Description Validation ————————————————————————————————
  if (!description.trim()) {
    errors.description = "Product description is required";
  } else if (description.length < 3 || description.length > 100) {
    errors.description =
      "Product description length should be between 3 and 100 characters length";
  }

  //———————————————————————————————— ImageURL Validation ————————————————————————————————
  const isImgUrlValid = /^(http|https|ftp):\/\/[^ "]{3,}$/.test(imageURL);

  if (!imageURL.trim()) {
    errors.imageURL = "Product imageURL is required";
  } else if (!isImgUrlValid) {
    errors.imageURL = "Please enter a valid Image URL";
  }

  //———————————————————————————————— Price Validation ————————————————————————————————
  if (!price.trim()) {
    errors.price = "Product price is required";
  } else if (isNaN(+price)) {
    errors.price = "Please enter a valid price";
  }

  //———————————————————————————————— colors Validation ————————————————————————————————
  if (!colors?.length) {
    errors.colors = "Choose at least one color";
  }

  return errors;
};
