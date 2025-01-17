import React, { useState } from "react";

interface ProductFormProps {
  onAddProduct: (product: Product) => void;
}

interface Product {
  name: string;
  description: string;
  price: number;
  available: boolean;
}

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
  const [productName, setProductName] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [available, setAvailable] = useState<string>("yes");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProduct({
      name: productName,
      description: productDescription,
      price: parseFloat(productPrice),
      available: available === "yes",
    });
    // Limpar formulário
    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setAvailable("yes");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome do produto:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </label>
      <label>
        Descrição do produto:
        <input
          type="text"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Valor do produto:
        <input
          type="number"
          step="0.01"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />
      </label>
      <label>
        Disponível para venda:
        <select value={available} onChange={(e) => setAvailable(e.target.value)}>
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>
      </label>
      <button type="submit">Cadastrar Produto</button>
    </form>
  );
};

export default ProductForm;
