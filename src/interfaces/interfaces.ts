export interface IProduct {
  id?: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: { name: string; imageURL: string };
}

export interface IForm {
  name: "title" | "description" | "imageURL" | "price";
  id: string;
  label: string;
  type: "text";
}

export interface IValidation {
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
}
export interface IErrors {
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string;
}

export interface ICategory {
  id: string;
  name: string;
  imageURL: string;
}
