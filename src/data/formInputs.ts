import type { IForm } from "../interfaces/interfaces";

export const formInputs: IForm[] = [
  { name: "title", id: "title", label: "Product Title", type: "text" },
  {
    name: "description",
    id: "description",
    label: "Product Description",
    type: "text",
  },
  {
    name: "imageURL",
    id: "imageURL",
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
