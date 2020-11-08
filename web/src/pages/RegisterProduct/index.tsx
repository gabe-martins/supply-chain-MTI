import React, { FormEvent, ReactElement, useState } from "react";

import api from "../../services/api";

import "./styles.css";

import PageHeader from "../../components/PageHeader";
import InputLabel from "../../components/InputLabel";

export default function RegisterProduct(): ReactElement {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  function handleNewProduct(e: FormEvent) {
    e.preventDefault();

    api
      .post("/products", {
        registrationNumber,
        name,
        manufacturer,
        type,
        description,
      })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
      })
      .catch(() => {
        alert("Ops! ocorreu um problema ao realiza o cadastro.");
      });

    setRegistrationNumber("");
    setName("");
    setManufacturer("");
    setType("");
    setDescription("");
  }

  return (
    <div id="page-product-form" className="container">
      <PageHeader
        title="Novo produto"
        description="Adicione as informações do produto."
      />

      <main>
        <form onSubmit={handleNewProduct}>
          <fieldset>
            <InputLabel
              name="registrationNumber"
              label="Número de registro"
              value={registrationNumber}
              valueType="number"
              onChange={(e) => setRegistrationNumber(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <InputLabel
              name="name"
              label="Nome do protudo"
              value={name}
              valueType="text"
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <InputLabel
              name="manufacturer"
              label="Fabricante"
              value={manufacturer}
              valueType="text"
              onChange={(e) => setManufacturer(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <InputLabel
              name="type"
              label="Tipo de produto"
              value={type}
              valueType="text"
              onChange={(e) => setType(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <InputLabel
              name="description"
              label="Breve Descrição"
              value={description}
              valueType="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </fieldset>

          <footer>
            <button type="submit">Salvar Produto</button>
          </footer>
        </form>
      </main>
    </div>
  );
}
