import type { IProduct } from "../interfaces/interfaces";
import { txtSlice } from "../utils/functions";
import Button from "./resusable/Button";
import Image from "./resusable/Image";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, category, colors, imageURL, price } = product;

  return (
    <div className="rounded-md border-2 border-zinc-200  max-w-md mx-auto lg:mx-0">
      <Image src={imageURL} alt={title} className="rounded-t-md w-full h-64" />

      {/* card body */}
      <div className="p-4">
        <h2 className="text-lg fw-semibold mb-1.5">{title}</h2>
        <p className="text-zinc-500">{txtSlice(description)}</p>

        {/* colors */}
        <div className="flex space-x-1 items-center my-5">
          {colors.map((color, indx) => (
            <span
              key={indx}
              className={`block w-5 h-5 rounded-full bg-[${color}] cursor-pointer`}
            ></span>
          ))}
          {/* <span className="block w-5 h-5 rounded-full bg-amber-950 cursor-pointer"></span>
          <span className="block w-5 h-5 rounded-full bg-indigo-500 cursor-pointer"></span>
          <span className="block w-5 h-5 rounded-full bg-pink-800 cursor-pointer"></span>
          <span className="block w-5 h-5 rounded-full bg-teal-800 cursor-pointer"></span>
          <span className="block w-5 h-5 rounded-full bg-rose-600 cursor-pointer"></span>
          <span className="block w-5 h-5 rounded-full bg-purple-500 cursor-pointer"></span>
          <span className="block w-5 h-5 rounded-full bg-lime-600 cursor-pointer"></span>
          <span className="block w-5 h-5 rounded-full bg-orange-500 cursor-pointer"></span> */}
        </div>

        {/* price */}
        <div className="flex justify-between items-center my-5">
          <span className="fw-bold">{price} EGP</span>
          <div className="flex gap-1.5 items-center">
            <Image
              src={category.imageURL}
              alt={category.name}
              className="h-8 w-8 rounded-full"
            />
            <span>{category.name}</span>
          </div>
        </div>

        {/* actions */}
        <div className="flex space-x-2">
          <Button className="bg-indigo-700 text-white">Edit</Button>
          <Button className="bg-red-800 text-white">Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
