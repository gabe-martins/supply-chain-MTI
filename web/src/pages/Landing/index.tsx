import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import {
  FiExternalLink,
  FiDownload,
  FiPieChart,
  FiPackage,
} from "react-icons/fi";

import "./styles.css";

export default function Landing(): ReactElement {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="text-area">
          <h1>MStarSupply</h1>
          <h2>
            <strong>Olá,</strong> o que deseja fazer
          </h2>
        </div>
      </div>

      <div className="buttons-container">
        <Link to="/analytic" className="landing-btn see-analytic">
          <FiPieChart />
          <br />
          Relatório
        </Link>

        <Link to="/input" className="landing-btn new-input">
          <FiDownload />
          <br />
          Entrada
        </Link>

        <Link to="/output" className="landing-btn new-output">
          <FiExternalLink />
          <br />
          Saída
        </Link>

        <Link to="/newproduct" className="landing-btn new-product">
          <FiPackage />
          <br />
          Produto
        </Link>
      </div>
    </div>
  );
}
