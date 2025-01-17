import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

interface Product {
  name: string;
  description: string;
  price: number;
  available: boolean;
}

const OAKApp: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState<boolean>(true);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
    setShowForm(false);
  };

  return (
    <div className="container">
      <img src="/oak.jpg" alt="Logo OAK" className="header-image" />
      <h1>Cadastro de Produtos</h1>
      {showForm ? (
        <ProductForm onAddProduct={addProduct} />
      ) : (
        <>
          <button onClick={() => setShowForm(true)}>Cadastrar Novo Produto</button>
          <ProductList products={products} />
        </>
      )}
    </div>
  );
};

export default OAKApp;
