import { useState, type ChangeEvent, type FormEvent } from "react";
import { categories, colors, productInitValue } from "../data/products";
import type { ICategory, IErrors, IProduct } from "../interfaces/interfaces";
import { addProductSchema } from "../validation/schemas";
import { formInputs } from "../data/formInputs";
import Input from "./resusable/Input";
import ErrorMsg from "./resusable/ErrorMsg";
import SelectMenu from "./resusable/SelectMenu";
import CircleColors from "./CircleColors";
import Button from "./resusable/Button";

interface IProps {
  closeModal: () => void;
  selectedProduct: IProduct;
  setSelectedProduct: (product: IProduct) => void;
  onEditProduct: (products: IProduct) => void;
}

const EditForm = ({
  closeModal,
  selectedProduct,
  setSelectedProduct,
  onEditProduct,
}: IProps) => {
  //———————————————————————————————— State ————————————————————————————————
  const [errorMsgs, setErrorMsgs] = useState<IErrors>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: "",
  });

  const [tempColors, setTempColors] = useState<string[]>(
    selectedProduct.colors
  );

  const productCategory = categories.find(
    (categ) => categ.name === selectedProduct.category.name
  )!;

  const [selectedCategory, setSelectedCategory] =
    useState<ICategory>(productCategory);

  //———————————————————————————————— Handlers ————————————————————————————————
  const storeColors = (color: string) => {
    setErrorMsgs({ ...errorMsgs, colors: "" });

    if (tempColors.includes(color)) {
      setTempColors((prev) =>
        prev.filter((selectedColor) => color !== selectedColor)
      );
      return;
    }
    setTempColors((prev) => [...prev, color]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelectedProduct({
      ...selectedProduct,
      [e.target.name]: e.target.value,
    });

    setErrorMsgs({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: "",
    });
  };

  const handleSumbit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { title, description, imageURL, price } = selectedProduct;

    const errors = addProductSchema({
      title,
      description,
      imageURL,
      price,
      colors: tempColors,
    });

    const hasErrorMsgs = Object.values(errors).some((val) => val !== "");

    if (hasErrorMsgs) {
      setErrorMsgs(errors);
      return;
    }

    onEditProduct({
      ...selectedProduct,
      colors: tempColors,
      category: {
        name: selectedCategory.name,
        imageURL: selectedCategory.imageURL,
      },
    });

    setSelectedProduct(productInitValue);
    setTempColors([]);
    closeModal();
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
            value={selectedProduct[input.name]}
            onChange={handleChange}
          />
          <ErrorMsg msg={errorMsgs[input.name]} />
        </div>
      ))}

      {/* category */}
      <SelectMenu
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />

      {/* colors */}
      <div className="my-5">
        <label className="font-semibold text-zinc-800">
          Choose Color <span className="text-red-700 font-bold">*</span>
        </label>
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
              className="text-white rounded-md p-1"
              key={color}
            >
              {color}
            </span>
          ))}
          <ErrorMsg msg={errorMsgs.colors} />
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
          Edit
        </Button>
      </div>
    </form>
  );
};

export default EditForm;
