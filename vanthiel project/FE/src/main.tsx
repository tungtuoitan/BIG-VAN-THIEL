import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import Products from "./pages/Products.tsx";
import Login from "@SRC/pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import Detail from "./pages/Detail.tsx";
import NotFound from "./pages/NotFound.tsx";
import Profile from "./pages/Profile.tsx";
import { ThemeProvider } from "@mui/material";
import muiTheme from "./themes/muiTheme.ts";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./pages/Cart.tsx";

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
