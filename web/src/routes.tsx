import React, { ReactElement } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import AnalyticPage from "./pages/AnalyticPage";
import InputPage from "./pages/InputPage";
import OutputPage from "./pages/OutputPage";
import RegisterProduct from "./pages/RegisterProduct";

export default function Routes(): ReactElement {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/analytic" component={AnalyticPage} />
      <Route path="/input" component={InputPage} />
      <Route path="/output" component={OutputPage} />
      <Route path="/newproduct" component={RegisterProduct} />
    </BrowserRouter>
  );
}
