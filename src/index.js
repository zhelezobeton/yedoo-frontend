import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import { store } from "./redux/configureStore";
import Header from "./components/Header/Header";
import OrderRegistPage from "./pages/OrderRegistPage/OrderRegistPage";
import FullCardPage from "./pages/FullCardPage/FullCardPage";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <OrderRegistPage /> */}
      <FullCardPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
