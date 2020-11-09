import React, { ReactElement } from "react";
import { CSVLink } from "react-csv";
import { FiSave } from "react-icons/fi";
import PageHeader from "../../components/PageHeader";

import "./styles.css";

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"],
];

export default function ExportCsvPage(): ReactElement {
  return (
    <div id="page-product-form" className="container">
      <PageHeader title="Salvar Planilhas" description="Faça aqui o download das planilhas." />
      <main>
        <CSVLink className="btn-container" data={csvData} target="_blank">
          <FiSave /> Planilha Global
        </CSVLink>
      </main>
    </div>
  );
}
