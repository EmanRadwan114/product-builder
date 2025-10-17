import type { IProduct } from "../interfaces/interfaces";
import { formatPrice, sliceTxt } from "../utils/functions";
import CircleColors from "./CircleColors";
import Button from "./resusable/Button";
import Image from "./resusable/Image";

interface IProps {
  product: IProduct;
  setSelectedProduct: (product: IProduct) => void;
  openEditModal: () => void;
  openDelModal: () => void;
}

const ProductCard = ({
  product,
  setSelectedProduct,
  openEditModal,
  openDelModal,
}: IProps) => {
  //———————————————————————————————— State ————————————————————————————————
  const { title, description, category, colors, imageURL, price } = product;

  //———————————————————————————————— Handlers ————————————————————————————————
  const editProduct = () => {
    setSelectedProduct(product);
    openEditModal();
  };

  const deleteProduct = () => {
    openDelModal();
    setSelectedProduct(product);
  };
  //———————————————————————————————— View ————————————————————————————————
  return (
    <div className="rounded-md border-2 border-zinc-200  max-w-md mx-auto lg:mx-0">
      <Image src={imageURL} alt={title} className="rounded-t-md w-full h-64" />

      {/* card body */}
      <div className="p-4">
        <h2 className="text-lg fw-semibold mb-1.5">{title}</h2>
        <p className="text-zinc-500">{sliceTxt(description)}</p>

        {/* colors */}
        <div className="flex space-x-1 items-center my-5">
          {colors.map((color) => (
            <CircleColors color={color} key={color} />
          ))}
        </div>

        {/* price */}
        <div className="flex justify-between items-center my-5">
          <span className="fw-bold">{formatPrice(price)} EGP</span>
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
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button className="bg-indigo-700 text-white" onClick={editProduct}>
            Edit
          </Button>
          <Button className="bg-red-800 text-white" onClick={deleteProduct}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
