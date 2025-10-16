import { useState, type ChangeEvent, type FormEvent } from "react";
import { formInputs } from "../data/formInputs";
import Button from "./resusable/Button";
import Input from "./resusable/Input";
import type { IProduct, IValidation } from "../interfaces/interfaces";
import { addProductSchema } from "../validation/schemas";
import ErrorMsg from "./resusable/ErrorMsg";
import CircleColors from "./CircleColors";
import { colors } from "../data/products";

//———————————————————————————————— Interface ————————————————————————————————
interface IProps {
  closeModal: () => void;
  onAddProduct: (products: IProduct) => void;
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

const AddForm = ({ closeModal, onAddProduct }: IProps) => {
  //———————————————————————————————— State ————————————————————————————————
  const [newProduct, setNewProduct] = useState<IProduct>(productInitValue);
  const [errorMsgs, setErrorMsgs] = useState<IValidation>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);

  //———————————————————————————————— Handlers ————————————————————————————————
  const storeColors = (color: string) => {
    if (tempColors.includes(color)) {
      setTempColors((prev) =>
        prev.filter((selectedColor) => color !== selectedColor)
      );
      return;
    }
    setTempColors((prev) => [...prev, color]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
    setErrorMsgs({ title: "", description: "", imageURL: "", price: "" });
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

    const hasErrorMsgs = Object.values(errors).some((val) => val !== "");

    if (hasErrorMsgs) {
      setErrorMsgs(errors);
      return;
    }

    onAddProduct({ ...newProduct, colors: tempColors });

    // setNewProduct((prev) => ({
    //   ...prev,
    //   title: "",
    //   description: "",
    //   price: "",
    //   imageURL: "",
    // }));
    // setTempColors([]);
  };

  //———————————————————————————————— View ————————————————————————————————
  return (
    <form onSubmit={handleSumbit}>
      {/* inputs */}
      {formInputs.map((input) => (
        <div className="mb-4 flex flex-col" key={input.id}>
          <label
            htmlFor={input.id}
            className="mb-1.5 font-semibold text-zinc-800"
          >
            {input.label} <span className="text-red-700 font-bold">*</span>
          </label>
          <Input
            type={input.type}
            id={input.id}
            name={input.name}
            value={newProduct[input.name]}
            onChange={handleChange}
          />
          <ErrorMsg msg={errorMsgs[input.name]} />
        </div>
      ))}

      {/* colors */}
      <div className="my-5">
        <p className="font-semibold text-zinc-800">
          Choose Color <span className="text-red-700 font-bold">*</span>
        </p>
        <div className="flex items-center my-1.5 flex-wrap gap-1">
          {colors.map((color) => (
            <CircleColors
              color={color}
              key={color}
              onClick={() => storeColors(color)}
            />
          ))}
        </div>
        <div className="my-3 flex flex-wrap gap-1">
          {tempColors.map((color) => (
            <span
              style={{ backgroundColor: color }}
              className="text-white"
              key={color}
            >
              {color}
            </span>
          ))}
        </div>
      </div>

      {/* actions */}
      <div className="flex space-x-3">
        <Button
          className="text-white bg-zinc-800"
          type="button"
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button className="text-white bg-indigo-700" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AddForm;
