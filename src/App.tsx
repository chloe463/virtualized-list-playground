import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Layout } from "./Layout";

import "./App.css";
import { Virtua } from "./virtualized-list/Virtua";
import { Virtuoso } from "./virtualized-list/Vituoso";
import { TanstackVirtual } from "./virtualized-list/TanstackVirtual";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout>Home</Layout>,
  },
  {
    path: "/virtua",
    element: <Virtua />,
  },
  {
    path: "/virtuoso",
    element: <Virtuoso />,
  },
  {
    path: "/tanstack",
    element: <TanstackVirtual />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
