import React from "react";

interface ProductListProps {
  products: Product[];
}

interface Product {
  name: string;
  description: string;
  price: number;
  available: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const sortedProducts = products.sort((a, b) => a.price - b.price);

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{formatPrice(product.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
