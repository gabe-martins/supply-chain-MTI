import React, { FormEvent, ReactElement, useEffect, useState } from "react";

import { FiAlertTriangle } from "react-icons/fi";

import api from "../../services/api";

import '../../components/Select/styles.css'

import PageHeader from "../../components/PageHeader";
import InputLabel from "../../components/InputLabel";

export default function InputPage(): ReactElement {
  const [listProducts, setProductsList] = useState<any[]>([])
  const [amount, setAmount] = useState("");
  const [local, setLocal] = useState("");
  const [product_number, setProduct_number] = useState("");

  useEffect(() => {
    api.get("/products").then((res) => {
      setProductsList(res.data);
      console.log(res.data);
    });
  }, []);

  function handleNewInput(e: FormEvent) {
    e.preventDefault();

    if (local === "" || amount === "" || product_number === "") {
      alert("Todos os campos devem ser preenchidos");
    } else {
      api
        .post("/output", {
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
    }

    setAmount("");
    setLocal("");
    setProduct_number("");
  }

  return (
    <div id="page-product-form" className="container">
      <PageHeader
        title="Saída de produtos"
        description="Adicione as informações."
      />

      <main>
        <form onSubmit={handleNewInput}>
        <fieldset>
            <div className="select-box">
              <select
                className="select-box"
                value={product_number}
                onChange={(e) => {
                  setProduct_number(e.target.value);
                }}
              >
                {listProducts.map((product) => (
                  <option
                    key={product.registrationNumber}
                    value={product.registrationNumber}
                  >
                    {product.name} - {product.registrationNumber}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>

          <fieldset>
            <InputLabel
              name="amount"
              label="Quantidade"
              value={amount}
              valueType="number"
              onChange={(e) => setAmount(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <InputLabel
              name="local"
              label="Locaização"
              value={local}
              valueType="text"
              onChange={(e) => setLocal(e.target.value)}
            />
          </fieldset>

          <footer>
            <p>
              Importante <FiAlertTriangle />
              <br />
              Preencha todos os dados
            </p>

            <button type="submit">Confirmar saída</button>
          </footer>
        </form>
      </main>
    </div>
  );
}
