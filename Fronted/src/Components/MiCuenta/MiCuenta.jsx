import "./MiCuenta.css";
import InputRegister from "./inputCuenta";
import { userSignIn, userSignUp } from "../../api/userApi";
import Swal from "sweetalert2";
// MODAL
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
// Transiciones
import Collapse from "react-bootstrap/Collapse";

const MiCuenta = () => {
  //  const [loginHold, setLoginHold] = useState(false);
  //useState que va a manejar los valores de todos los inputs del formulario
  const [inputsLogin, setInputsLogin] = useState({
    nameUser: "",
    email: "",
    password: "",
  });

  const [inputsCreate, setInputsCreate] = useState({
    nameUser: "",
    email: "",
    password: "",
  });

  //funcion que maneja los cambios de valores de los inputs
  const handleInputsForm = (e) => {
    setInputsCreate({ ...inputsCreate, [e.target.name]: e.target.value });
  };

  //funcion handle para las pruebas del boton Enviar
  const handleEnviar = async (e) => {
    e.preventDefault(); //con esto evitamos que los formularios se reinicien

    //ToDo: Envio de los datos al API Rest
    if (
      !inputsCreate.nameUser ||
      !inputsCreate.email ||
      !inputsCreate.password
    ) {
      Swal.fire("Error!", "All inputs are required", "error");
    } else {
      const result = await userSignUp(inputsCreate);
      console.log(result);
      console.log("estamos desde registerForm");
      console.log(result.status);
      if (result.status === 200) {
        alert(result.message);
        // limpiar formulario
        setInputsCreate({
          nameUser: "",
          email: "",
          password: "",
        });
        window.location.href = "/";
      } else {
        alert(result.message);
      }
    }
  };

  // -- LOGIN INICIAR SESION --

  const handleInputs = (e) => {
    const { target } = e;
    setInputsLogin({ ...inputsLogin, [target.name]: target.value });
  };

  const handleLogin = async (e) => {
    console.log("ENTRAR A LOGIN");
    e.preventDefault();
    if (!inputsLogin.email || !inputsLogin.password) {
      alert("All inputs are required");
    } else {
      const result = await userSignIn(inputsLogin);
      if (result.message) {
        alert(result.message);
      } else {
        //obtenemos el token y lo agregamos a una variable de almacenamiento local

        console.log("BIENVENIDO");
        localStorage.setItem("accessToken", result.accessToken);
        alert("Bienvenido");
        window.location.href = "/Citas";

        //regresamos al usuario a la pagina index despues de 3 segundos
        // setTimeout(() => {
        //   window.location.href = "/Citas";
        // }, 1800);
      }
      console.log(result);
    }
  };

  // CONSTANTES PARA EL MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // CONSTANTES PARA LA TRANCISION
  let [openLogin, setOpenLogin] = useState(true);
  let [openCreate, setOpenCreate] = useState(false);

  return (
    <>
      <label variant="primary" onClick={handleShow}>
        Mi cuenta
      </label>
      <Modal show={show} onHide={handleClose} className="modal-contain">
        <Modal.Body className="modal-body">
          <div className="buttons-contain">
            <button
              className="button-sesion-active"
              id="button-sesion-active"
              onClick={() => {
                setOpenLogin(true);
                setOpenCreate(false);
                document.getElementById("button-sesion-active").className =
                  "button-sesion-active";
                document.getElementById("button-sesion-active2").className =
                  "button-sesion";
              }}
              aria-controls="example-collapse-text1"
              aria-expanded={openLogin}
            >
              Iniciar sesión
            </button>
            <button
              className="button-sesion"
              id="button-sesion-active2"
              onClick={() => {
                setOpenCreate(true);
                setOpenLogin(false);
                document.getElementById("button-sesion-active2").className =
                  "button-sesion-active";
                document.getElementById("button-sesion-active").className =
                  "button-sesion";
              }}
              aria-controls="example-collapse-text"
              aria-expanded={openCreate}
            >
              Crear cuenta
            </button>
          </div>
          <Collapse in={openLogin}>
            <div className="collapse-item" id="example-collapse-text1">
              <h3 className="item-titulo">Iniciar sesión</h3>
              {/* <div className="contain-redes">
                <span className="item-text">Inicia sesión con Google</span>
                <ul className="sesion-redes">
                  <li className="sesion-redes-img">
                    <img src={Images.GooglePink} alt="google" />
                  </li>
                  <li className="sesion-redes-img">
                    <img src={Images.FacebookPink} alt="Facebook" />
                  </li>
                </ul>
              </div> */}
              <hr />
              <form className="formulario" action="" onSubmit={handleLogin}>
                <InputRegister
                  title="Correo electronico"
                  name="email"
                  type="text"
                  value={inputsLogin.email}
                  handle={handleInputs}
                />
                <InputRegister
                  title="Contraseña"
                  name="password"
                  type="password"
                  value={inputsLogin.password}
                  handle={(e) => handleInputs(e)}
                />
                <button className="button-log" type="submit" label="Submit">
                  {" "}
                  Iniciar sesión
                </button>
              </form>
              <span className="contrasena-body">¿Olvidaste tu contraseña?</span>
              <span className="contrasena-body">
                Si aun no tiene cuenta,
                <span className="contrasena-body-resalt">Registrate</span>
              </span>
            </div>
          </Collapse>
          <Collapse in={openCreate}>
            <div className="collapse-item" id="example-collapse-text">
              <h3 className="item-titulo">Crear cuenta</h3>
              {/* <span className="item-text">Crea tu cuenta con Google</span>
              <ul className="sesion-redes">
                <li className="sesion-redes-img">
                  <img src={Images.GooglePink} alt="google" />
                </li>
                <li className="sesion-redes-img">
                  <img src={Images.FacebookPink} alt="Facebook" />
                </li>
              </ul> */}
              <hr />
              <form className="formulario" action="" onSubmit={handleEnviar}>
                <InputRegister
                  title="Nombre de usuario"
                  name="nameUser"
                  type="text"
                  value={inputsCreate.name}
                  handle={handleInputsForm}
                />
                <InputRegister
                  title="Correo electronico"
                  name="email"
                  type="text"
                  value={inputsCreate.email}
                  handle={handleInputsForm}
                />
                <InputRegister
                  title="Contraseña"
                  name="password"
                  type="password"
                  value={inputsCreate.password}
                  handle={handleInputsForm}
                />
                <button className="button-log" type="submit">
                  {" "}
                  Crear cuenta
                </button>
              </form>
              <span className="contrasena-body">¿Olvidaste tu contraseña?</span>
              <span className="contrasena-body">
                Si aun no tiene cuenta,
                <span className="contrasena-body-resalt">Registrate</span>
              </span>
            </div>
          </Collapse>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MiCuenta;
