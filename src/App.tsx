import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import { Layout } from "./Layout";

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout>Home</Layout>
  },
  {
    path: "/virtua",
    element: <Layout>virtua</Layout>
  },
  {
    path: "/virtuoso",
    element: <Layout>virtuoso</Layout>
  },
  {
    path: "/tanstack",
    element: <Layout>@Tanstack/react-virtual</Layout>
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
