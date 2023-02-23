import { Link } from "react-router-dom";
import MiCuenta from "../MiCuenta/MiCuenta";
import Images from "../../img/Images";
import AgendarCita from "../AgendarCita/AgendarCita";
// import Logo from "./img/Logo.png";
// import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <>
      <nav className="nav-contain">
        <Link to={"/"}>
          <img className="Logo-nav" src={Images.Logo} alt="" />
        </Link>
        <div className="contenedor-nav">
          <ul className="nav-nav">
            <li className="nav-nav-item">
              <Link className="nav-nav-color" to="/sobreNosotros">
                Sobre nosotros
              </Link>
            </li>
            <li className="nav-nav-item">
              {/* <label onClick={handleShow}>Mi cuenta</label> */}
              <MiCuenta />
            </li>
            <li className="nav-nav-item-button">
              {/* <Link className="nav-nav-color" to="/agendarCita">
                !Agendar tu cita¡
              </Link> */}
              <AgendarCita />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
