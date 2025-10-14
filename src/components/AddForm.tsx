import { useState, type ChangeEvent } from "react";
import { formInputs } from "../data/formInputs";
import Button from "./resusable/Button";
import Input from "./resusable/Input";
import type { IProduct } from "../interfaces/interfaces";

const AddForm = () => {
  const [newProduct, setNewProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: { name: "", imageURL: "" },
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewProduct((product) => {
      return { ...product, [e.target.name]: e.target.value };
    });
  };
  return (
    <form>
      {formInputs.map((input, indx) => (
        <div className="mb-4 flex flex-col" key={indx}>
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
            onChange={onChangeHandler}
          />
        </div>
      ))}
      <div className="flex space-x-3">
        <Button className="text-white bg-zinc-800">Cancel</Button>
        <Button className="text-white bg-indigo-700">Submit</Button>
      </div>
    </form>
  );
};

export default AddForm;
