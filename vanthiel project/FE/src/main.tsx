import ReactDOM from "react-dom/client";
import HomePage from "@SRC/pages/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@SRC/store/store.ts";
import Products from "@SRC/pages/Products.tsx";
import Login from "@SRC/pages/Login.tsx";
import SignUp from "@SRC/pages/SignUp.tsx";
import Detail from "@SRC/pages/Detail.tsx";
import NotFound from "@SRC/pages/NotFound.tsx";
import Profile from "@SRC/pages/Profile.tsx";
import { ThemeProvider } from "@mui/material";
import muiTheme from "@SRC/themes/muiTheme.ts";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cart from "@SRC/pages/Cart.tsx";
import { initMockServer } from "./db/mockBackend";

initMockServer()

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <NotFound /> },
  { path: "/products/:userType", element: <Products /> },
  { path: "/products/:userType/:id", element: <Detail /> },
  { path: "/login", element: <Login /> },
  { path: "/cart", element: <Cart /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/profile", element: <Profile /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={muiTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
    <ToastContainer />
  </Provider>
);
