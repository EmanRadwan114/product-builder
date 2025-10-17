import { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import Modal from "./components/resusable/Modal";
import Button from "./components/resusable/Button";
import AddForm from "./components/AddForm";
import type { IProduct } from "./interfaces/interfaces";
import initialProducts, { productInitValue } from "./data/products";
import EditForm from "./components/EditForm";
import toast, { Toaster } from "react-hot-toast";

function App() {
  //———————————————————————————————— state ————————————————————————————————
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [products, setProducts] = useState<IProduct[]>(initialProducts);
  const [selectedProduct, setSelectedProduct] =
    useState<IProduct>(productInitValue);

  //———————————————————————————————— Handlers ————————————————————————————————
  const openModal = (setModal: (val: boolean) => void): void => setModal(true);
  const closeModal = (setModal: (val: boolean) => void): void =>
    setModal(false);

  const onAddProduct = (newProduct: IProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
    toast.success("Product added successfully!");
  };

  const onEditProduct = (selProduct: IProduct) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === selProduct.id ? { ...selProduct } : product
      )
    );
    toast.success("Product edited successfully!");
  };

  const onDeleteProduct = (selProduct: IProduct) => {
    setProducts((prev) =>
      prev.filter((product) => product.id !== selProduct.id)
    );
    closeModal(setIsDeleteModalOpen);
    toast.success("Product deleted successfully!");
  };

  //———————————————————————————————— View ————————————————————————————————
  return (
    <main className="container mx-auto px-5 py-10 md:px-10 xl:px-20">
      {/*———————————————————————————————— Heading ————————————————————————————————*/}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-10 gap-3">
        <h1 className="sm:flex-3 text-4xl font-semibold">
          Latest <span className="text-indigo-700">Products</span>
        </h1>
        <Button
          className="bg-indigo-700 sm:flex-1 text-white"
          onClick={() => openModal(setIsAddModalOpen)}
        >
          Add Product
        </Button>
      </div>
      {/*———————————————————————————————— products ————————————————————————————————*/}
      <Products
        products={products}
        setSelectedProduct={setSelectedProduct}
        openEditModal={() => setIsEditModalOpen(true)}
        openDelModal={() => setIsDeleteModalOpen(true)}
      />

      {/*———————————————————————————————— Add Modal ————————————————————————————————*/}
      <Modal
        isOpen={isAddModalOpen}
        closeModal={() => closeModal(setIsAddModalOpen)}
        title="Add New Product"
      >
        <AddForm
          closeModal={() => closeModal(setIsAddModalOpen)}
          onAddProduct={onAddProduct}
        />
      </Modal>
      {/*———————————————————————————————— Edit Modal ————————————————————————————————*/}
      <Modal
        isOpen={isEditModalOpen}
        closeModal={() => closeModal(setIsEditModalOpen)}
        title="Edit Product"
      >
        <EditForm
          closeModal={() => closeModal(setIsEditModalOpen)}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          onEditProduct={onEditProduct}
        />
      </Modal>

      {/*———————————————————————————————— Delete Modal ————————————————————————————————*/}
      <Modal
        isOpen={isDeleteModalOpen}
        closeModal={() => closeModal(setIsDeleteModalOpen)}
      >
        <div>
          <p className="text-red-800 font-bold text-2xl text-center">
            Are you sure you want to delete this?
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-8">
            <Button
              className="text-white bg-zinc-800"
              onClick={() => closeModal(setIsDeleteModalOpen)}
            >
              Cancel
            </Button>
            <Button
              className="text-white bg-red-800"
              onClick={() => onDeleteProduct(selectedProduct)}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
      <Toaster />
    </main>
  );
}

export default App;
