import type { IForm } from "../interfaces/formInputs";

export const formInputs: IForm[] = [
  { name: "title", id: "title", label: "Product Title", type: "text" },
  {
    name: "description",
    id: "description",
    label: "Product Description",
    type: "text",
  },
  {
    name: "image_url",
    id: "image_url",
    label: "Product Image URL",
    type: "text",
  },
  {
    name: "price",
    id: "price",
    label: "Product Price",
    type: "text",
  },
];
