import { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import Modal from "./components/resusable/Modal";
import Button from "./components/resusable/Button";

function App() {
  //———————————————————————————————— state ————————————————————————————————
  const [isOpen, setIsOpen] = useState(false);

  //———————————————————————————————— Handlers ————————————————————————————————
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
          onClick={openModal}
        >
          Add Product
        </Button>
      </div>
      {/*———————————————————————————————— Modal ————————————————————————————————*/}
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
        <div className="flex space-x-2">
          <Button className="text-white bg-zinc-800">Cancel</Button>
          <Button className="text-white bg-indigo-700">Submit</Button>
        </div>
      </Modal>
      <Products />
    </main>
  );
}

export default App;
