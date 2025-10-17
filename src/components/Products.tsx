import ProductCard from "./ProductCard";
import type { IProduct } from "../interfaces/interfaces";

interface IProps {
  products: IProduct[];
  setSelectedProduct: (product: IProduct) => void;
  openEditModal: () => void;
  openDelModal: () => void;
}

const Products = ({
  products,
  setSelectedProduct,
  openEditModal,
  openDelModal,
}: IProps) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      {products.map((product: IProduct) => (
        <ProductCard
          product={product}
          key={product.id}
          setSelectedProduct={setSelectedProduct}
          openEditModal={openEditModal}
          openDelModal={openDelModal}
        />
      ))}
    </section>
  );
};

export default Products;
