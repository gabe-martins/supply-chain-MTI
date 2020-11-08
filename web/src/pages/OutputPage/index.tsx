import React, { FormEvent, ReactElement, useEffect, useState } from "react";

import { FiAlertTriangle } from "react-icons/fi";

import api from "../../services/api";

import '../../components/Select/styles.css'

import PageHeader from "../../components/PageHeader";
import InputLabel from "../../components/InputLabel";
import Select from "../../components/Select";

export default function InputPage(): ReactElement {
  // const [listProducts, setProductsList] = useState([{ label: "", value: "" }]);
  const [amount, setAmount] = useState("");
  const [local, setLocal] = useState("");
  const [product_number, setProduct_number] = useState("");

  useEffect(() => {
    async function loadProducts() {
      const response = await fetch("http://localhost:3333/products");
      const body = (await response.json()) as {
        result: { name: string; product_number: number };
      };
      console.log(body);
      // setProductsList(
      //   body.result.map(({ name, product_number }) => ({
      //     label: name,
      //     value: product_number,
      //   }))
      // );
    }
    loadProducts();
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
            {/* <div className="select-box">
              <select
                className="select-box"
                value={product_number}
                onChange={(e) => {
                  setProduct_number(e.target.value);
                }}
              >
                {listProducts.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label} - {item.value}
                  </option>
                ))}
              </select>
            </div> */}

            <Select
              name="product_number"
              label="Produto"
              value={product_number}
              onChange={(e) => {
                setProduct_number(e.target.value);
              }}
              options={[
                { value: "128245", label: "Console Sony PlayStation 5" },
                { value: "106998", label: "Notebook Lenovo Ideapad S145" },
              ]}
            />
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

            <button type="submit">Confirmar entrada</button>
          </footer>
        </form>
      </main>
    </div>
  );
}
