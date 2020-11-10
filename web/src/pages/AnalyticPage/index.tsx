import React, { ReactElement, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import "./styles.css";

import PageHeader from "../../components/PageHeader";
import api from "../../services/api";
import { Link } from "react-router-dom";

export default function RegisterProduct(): ReactElement {
  const [chartGlobal, setChartGlobal] = useState({});
  const [chartProductOne, setChartProductOne] = useState({});
  const [products, setProducts] = useState<any[]>([]);
  const [inputs, setInputs] = useState<any[]>([]);
  const [outputs, setOutputs] = useState<any[]>([]);

  function loadProducts() {
    api.get("/products").then((res) => {
      setProducts(res.data);
    });
  }

  useEffect(() => {
    api.get("/inputs").then((res) => {
      setInputs(res.data);
    });
    api.get("/outputs").then((res) => {
      setOutputs(res.data);
    });
  }, []);

  var totalInput = inputs.length;
  var totalOutput = outputs.length;

  var color1 = "#265269";
  var color2 = "#099fed";
  const chart = () => {
    setChartGlobal({
      labels: ["Novembro"],
      datasets: [
        {
          label: "Entrada",
          data: [totalInput],
          backgroundColor: color1,
          borderColor: color1,
          borderWidth: 4,
        },
        {
          label: "Saída",
          data: [totalOutput],
          backgroundColor: color2,
          borderColor: color2,
          borderWidth: 4,
        },
      ],
    });
    setChartProductOne({
      labels: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
      ],
      datasets: [
        {
          label: "Entrada",
          data: [53, 44, 65, 44, 29, 73, 78, 51, 32, 46, 66, 82],
          backgroundColor: color1,
          borderColor: color1,
          borderWidth: 4,
        },
        {
          label: "Saída",
          data: [45, 24, 55, 27, 33, 33, 66, 34, 26, 42, 45, 57],
          backgroundColor: color2,
          borderColor: color2,
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
    // loadInputAndOuput();
  });

  return (
    <div id="page-product-form" className="container">
      <PageHeader title="Analítico" description="Vejas os dados." />
      <main>
        <div className="chart-box">
          <h1>Global</h1>
          <Bar data={chartGlobal} options={{ responsive: true }} />
        </div>

        <div className="chart-box">
          <h1>Notebook Lenovo Ultrafino Ideapad S145</h1>
          <Bar data={chartProductOne} options={{ responsive: true }} />
        </div>

        <div className="chart-box">
          <h1>Console Sony PlayStation 5 Digital Edition</h1>
          <Bar data={chartProductOne} options={{ responsive: true }} />
        </div>

        <div className="chart-box">
          <h1>Smartphone Nokia 5.3</h1>
          <Bar data={chartProductOne} options={{ responsive: true }} />
        </div>

        <div className="chart-box">
          <h1>Smart TV Samsung Series 5</h1>
          <Bar data={chartProductOne} options={{ responsive: true }} />
        </div>
        <footer>
          <Link to="/download" className="export-page">
            Salvar Planilhas
          </Link>
        </footer>
      </main>
    </div>
  );
}
