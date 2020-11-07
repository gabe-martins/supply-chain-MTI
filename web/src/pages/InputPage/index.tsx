import React, { FormEvent, ReactElement, useEffect, useState } from "react";

import api from "../../services/api";

import "./styles.css";

import PageHeader from "../../components/PageHeader";
import InputLabel from "../../components/InputLabel";
import Select from "../../components/Select";

export default function InputPage(): ReactElement {
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState("");
  const [local, setLocal] = useState("");
  const [product_number, setProduct_number] = useState("");

  // async function loadProducts() {
  //   const res = await api.get("/products");
  //   setProducts(res.data.products);
  // }
  // useEffect(() => {
  //   loadProducts();
  // }, []);

  function handleNewInput(e: FormEvent) {
    e.preventDefault();

    api
      .post("/input", {
        amount,
        local,
        product_number,
      })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
      })
      .catch(() => {
        alert("Ops! ocorreu um problema ao realiza o cadastro.");
      });

    setAmount("");
    setLocal("");
    setProduct_number("");
  }

  return (
    <div id="page-product-form" className="container">
      <PageHeader
        title="Entrada de produtos"
        description="Adicione as informações."
      />

      <main>
        <form onSubmit={handleNewInput}>
          <fieldset>
            <Select
              name="product_number"
              label="Produto"
              value={product_number}
              onChange={(e) => {
                setProduct_number(e.target.value);
              }}
              options={[
                { value: "128241", label: "Console Sony PlayStation 5" },
                { value: "55647", label: "Pen Drive Multilaser Twist" },
              ]}
            />
          </fieldset>

          <fieldset>
            <InputLabel
              name="amount"
              label="Quantidade"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <InputLabel
              name="local"
              label="Locaização"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
            />
          </fieldset>

          <footer>
            <button type="submit">Confirmar entrada</button>
          </footer>
        </form>
      </main>
    </div>
  );
}
