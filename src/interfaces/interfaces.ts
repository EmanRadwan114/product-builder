export interface IProduct {
  id?: string | undefined;
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
