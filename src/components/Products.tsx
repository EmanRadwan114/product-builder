import ProductCard from "./ProductCard";
import type { IProduct } from "../interfaces/interfaces";

interface IProps {
  products: IProduct[];
  setSelectedProduct: (product: IProduct) => void;
  setIsModalOpen: (val: boolean) => void;
}

const Products = ({ products, setSelectedProduct, setIsModalOpen }: IProps) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      {products.map((product: IProduct) => (
        <ProductCard
          product={product}
          key={product.id}
          setSelectedProduct={setSelectedProduct}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
    </section>
  );
};

export default Products;
