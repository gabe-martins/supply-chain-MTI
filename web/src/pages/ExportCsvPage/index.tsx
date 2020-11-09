import React, { ReactElement, useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { FiSave } from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import api from "../../services/api";

import "./styles.css";

export default function ExportCsvPage(): ReactElement {
  const [products, setProducts] = useState<any[]>([]);
  // const [inputs, setInputs] = useState<any[]>([]);
  // const [outputs, setOutputs] = useState<any[]>([]);

  useEffect(() => {
    api.get("/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  console.log(products)

  return (
    <div id="page-product-form" className="container">
      <PageHeader
        title="Salvar Planilhas"
        description="Faça aqui o download das planilhas."
      />
      <main>
        <CSVLink className="btn-container" data={products} target="_blank">
          <FiSave /> Planilha Global
        </CSVLink>
      </main>
    </div>
  );
}
