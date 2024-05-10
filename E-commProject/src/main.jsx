import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./routes/cart.jsx";
import Home from "./routes/home.jsx";
import { Provider } from "react-redux";
import eCommStore from "./store/index.js";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
        // action: createPostAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={eCommStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
