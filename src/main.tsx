// src/main.tsx or src/index.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from 'react-redux'
import { store } from "./redux/store"; 
import { RouterProvider } from "react-router-dom";
import router from "./route/router";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
