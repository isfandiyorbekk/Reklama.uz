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
import DetailPage from "./DetailPage/DetailPage";
import Login from "./pages/Login";
import GuestRoute from "./companets/GuestRoute";
import Saralanganlar from "./pages/Saralanganlar";
import MeningProfilim from "./pages/Profil/MeningProfilim";
import MeningElonlarim from "./pages/Profil/MeningElonlarim";

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
        path: "SeacherPage",
        element: <SeacherPage />,
      },
      {
        path: "kategoriyalar",
        element: <Kategoriyalar />,
      },
      {
        path: "xizmatlar",
        element: <Xizmatlar />,
      },
      {
        path: "biz_haqimizda",
        element: <BizHaqimizda />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
      {
        path: "saralanganlar",
        element: <Saralanganlar />,
      },

      {
        path: "/profil",
        element: <MeningProfilim />,
      },
      {
        path: "mening-elonlarim",
        element: <MeningElonlarim />,
      },
    ],
  },
  {
    path: "/qoshish",
    element: <ElonQoshish />,
  },
  {
    element: <GuestRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
