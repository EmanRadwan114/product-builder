import { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";
import type { IProduct } from "../interfaces/interfaces";

const Products = () => {
  const [productsList, setProductsList] = useState(products);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      {productsList.map((product: IProduct) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
};

export default Products;
