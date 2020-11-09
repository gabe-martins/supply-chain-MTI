import React, { ReactElement, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import "./styles.css";

import PageHeader from "../../components/PageHeader";
import api from "../../services/api";

export default function RegisterProduct(): ReactElement {
  const [chartGlobal, setChartGlobal] = useState({});
  const [chartProductOne, setChartProductOne] = useState({});
  const [products, setProducts] = useState({});

  var fillPattern = "#265269";
  const chart = () => {
    // let productsName = [];
    // let productsId: number[] = [];
    // let arrayInput: number[] = [];
    // let arrayOutput: number[] = [];
    // let totalInput: number;

    // api
    //   .get("/inputs")
    //   .then((res) => {
    //     for (const dataObj of res.data) {     
    //       arrayInput.push(dataObj.arrayInput);
    //       totalInput = arrayInput.length;
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // api
    //   .get("/outputs")
    //   .then((res) => {
    //     for (const dataObj of res.data) {
    //       arrayOutput.push(dataObj.arrayOutput);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    setChartGlobal({
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
        "Dezembro",
      ],
      datasets: [
        {
          label: "Entrada",
          data: [
            20000,
            32000,
            18500,
            26620,
            31600,
            37000,
            36550,
            36100,
            39700,
            35250,
            38000,
            42150,
          ],
          backgroundColor: fillPattern,
          borderColor: fillPattern,
          borderWidth: 4,
        },
        {
          label: "Saída",
          data: [
            16000,
            17200,
            18900,
            15600,
            22000,
            31000,
            30500,
            32050,
            37120,
            39000,
            32000,
            41000,
          ],
          backgroundColor: fillPattern,
          borderColor: fillPattern,
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
        "Dezembro",
      ],
      datasets: [
        {
          label: "Entrada",
          data: [53, 44, 65, 44, 29, 73, 78, 51, 32, 46, 66, 82],
          backgroundColor: fillPattern,
          borderColor: fillPattern,
          borderWidth: 4,
        },
        {
          label: "Saída",
          data: [45, 24, 55, 27, 33, 33, 66, 34, 26, 42, 45, 57],
          backgroundColor: fillPattern,
          borderColor: fillPattern,
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
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
      </main>
    </div>
  );
}
