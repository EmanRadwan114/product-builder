import { useState, type ChangeEvent, type FormEvent } from "react";
import { formInputs } from "../data/formInputs";
import Button from "./resusable/Button";
import Input from "./resusable/Input";
import type { IProduct } from "../interfaces/interfaces";
import { addProductSchema } from "../validation/schemas";

//———————————————————————————————— Interface ————————————————————————————————
interface IProps {
  closeModal: () => void;
}
//———————————————————————————————— variables ————————————————————————————————
const productInitValue: IProduct = {
  title: "",
  description: "",
  imageURL: "",
  price: "",
  colors: [],
  category: { name: "", imageURL: "" },
};

const AddForm = ({ closeModal }: IProps) => {
  //———————————————————————————————— State ————————————————————————————————
  const [newProduct, setNewProduct] = useState<IProduct>(productInitValue);

  //———————————————————————————————— Handlers ————————————————————————————————
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewProduct((product) => {
      return { ...product, [e.target.name]: e.target.value };
    });
  };

  const handleSumbit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { title, description, imageURL, price } = newProduct;

    const errors = addProductSchema({
      title,
      description,
      imageURL,
      price,
    });

    console.log(errors);

    const hasErrorMsgs = Object.values(errors).some((val) => val !== "");

    if (hasErrorMsgs) return;

    console.log(hasErrorMsgs);
  };

  //———————————————————————————————— View ————————————————————————————————
  return (
    <form onSubmit={handleSumbit}>
      {formInputs.map((input) => (
        <div className="mb-4 flex flex-col" key={input.id}>
          <label
            htmlFor={input.id}
            className="mb-1.5 font-semibold text-zinc-800"
          >
            {input.label}
          </label>
          <Input
            type={input.type}
            id={input.id}
            name={input.name}
            value={newProduct[input.name]}
            onChange={handleChange}
          />
        </div>
      ))}
      <div className="flex space-x-3">
        <Button className="text-white bg-zinc-800" onClick={closeModal}>
          Cancel
        </Button>
        <Button className="text-white bg-indigo-700">Submit</Button>
      </div>
    </form>
  );
};

export default AddForm;
