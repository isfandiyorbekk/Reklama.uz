import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Elonlar from "./pages/Elonlar";
import MainLayout from "./layouts/MainLayout";
import Kategoriyalar from "./pages/Kategoriyalar";
import Xizmatlar from "./pages/Footer/Xizmatlar";
import BizHaqimizda from "./pages/Footer/BizHaqimizda";
import ElonQoshish from "./pages/ElonQoshish";
import { SearchProvider } from "./Context/SearchContext";
import SeacherPage from "./pages/SeacherPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SearchProvider>
        <MainLayout />
      </SearchProvider>
    ),
    children: [
      {
        index: true,
        element: <Elonlar />,
      },
      {
        path: "/SeacherPage",
        element: <SeacherPage />,
      },
      {
        path: "/kategoriyalar",
        element: <Kategoriyalar />,
      },
      {
        path: "/xizmatlar",
        element: <Xizmatlar />,
      },
      {
        path: "/biz_haqimizda",
        element: <BizHaqimizda />,
      },
    ],
  },
  {
    path: "/qoshish",
    element: <ElonQoshish />,
  },
]);
1;

function App() {
  return <RouterProvider router={router} />;
}

export default App;
