import ReactDOM from "react-dom/client";

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import React from "react";
import Home from "./Home";
import SobreNosotros from "./Components/SobreNosotros/SobreNosotros";
import MiCuenta from "./Components/MiCuenta/MiCuenta";
import AgendarCita from "./Components/AgendarCita/AgendarCita";
import Principal from "./Principal";
import MisCitas from "./Components/MisCitas/MisCitas";

//Creacion de las rutas de nuestro proyecto
//las rutas se insertan dentro de un array,dicho array se enviara al routerProvider
const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Home />}>
      <Route index element={<Principal />} />,
      <Route path="/sobreNosotros" element={<SobreNosotros />} />,
      <Route path="/miCuenta" element={<MiCuenta />} />,
      <Route path="/agendarCita" element={<AgendarCita />} />,
      <Route path="/Citas" element={<MisCitas />} />,
    </Route>,
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
