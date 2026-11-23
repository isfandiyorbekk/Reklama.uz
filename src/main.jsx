import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProfilProvider } from "./Context/ProfilContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProfilProvider>
    <App />
  </ProfilProvider>,
);
