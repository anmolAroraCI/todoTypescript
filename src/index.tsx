import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "././store/store";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
      <ToastContainer closeOnClick theme="dark" pauseOnFocusLoss={false} autoClose={2000} position="bottom-right"/>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
