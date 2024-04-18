import React from "react";
import TestOne from "./components/TestOne";
import TestTwo from "./components/TestTwo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TestOne />,
    },
    {
      path: "/test2",
      element: <TestTwo />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
