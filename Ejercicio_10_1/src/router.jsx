import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import ErrorPage from "./pages/ErrorPage";
import { countriesLoader } from "./loaders/countriesLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: countriesLoader,
    id: "root",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "country/:countryName",
        element: <CountryDetails />,
      },
    ],
  },
]);

export default router;
