import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage.tsx";
import "./input.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import Layout from "./components/Layout.tsx";
import AllProducts from "./pages/AllProducts.tsx";

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/all-products", element: <AllProducts /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </Provider>
);
