import React, { useState, useEffect, ReactElement } from "react";
import { FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";
import PageHeader from "../../components/PageHeader";

export default function ProductsPage(): ReactElement {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    api.get("/products").then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);

  async function handleDeleteProduct(registrationNumber: number) {
    try {
      await api.delete(`product/${registrationNumber}`);
    } catch (err) {
      alert("Erro ao deletar caso, tente novamente");
    }
  }

  return (
    <div id="page-product-form" className="container">
      <PageHeader
        title="Novo produto"
        description="Adicione as informações do produto."
      />

      <main>
        <ul>
          {products.map((product) => (
            <li key={product.registrationNumber}>
              <strong>{product.name}</strong>
              <p>{product.registrationNumber}</p>
              <p>
                {product.manufacturer}, {product.type}
              </p>
              <button
                onClick={() => handleDeleteProduct(product.registrationNumber)}
                type="button"
              >
                <FiTrash2 size={22} color="#ff3c00"></FiTrash2>
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
