import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Layout from "./layouts/Layouts";
import About from "./pages/About";
import Testimony from "./pages/Testimony";
import FAQ from "./pages/FAQ";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "testimony",
        element: <Testimony />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
]);