import React, { ReactElement, useState } from "react";

import api from "../../services/api";
import "./styles.css";
import PageHeader from "../../components/PageHeader";

export default function RegisterProduct(): ReactElement {


  return (
    <div id="page-product-form" className="container">
      <PageHeader
        title="Analítico"
        description="Vejas os dados."
      />
    </div>
  );
}
