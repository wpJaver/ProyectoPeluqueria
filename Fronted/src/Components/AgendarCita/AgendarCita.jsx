import "bootstrap/dist/css/bootstrap.min.css";
import "./AgendarCita.css";
import InputRegister from "./InputAgendar";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Images from "../../img/Images";
const AgendarCita = () => {
  const [inputs, setInputs] = useState({
    date: "",
    name: "",
    barber: "",
  });

  //funcion que maneja los cambios de valores de los inputs
  const handleInputsForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <Button variant="primary">Primary</Button> <h1>React boostrap</h1> */}
      <label
        className="label-agendarcita"
        variant="primary"
        onClick={handleShow}
      >
        !Agenda tu cita¡
      </label>
      <Modal className="modal-agendarCita" show={show} onHide={handleClose}>
        <Modal.Body className="modal-agendarCita-body">
          <div className="contain-agendarCita">
            <div className="contain-agendarCita-servicio">
              <span className="agendarCita-servicio-titulo1">Agendar</span>
              <span className="agendarCita-servicio-titulo2">
                Corte de pelo + Tinte
              </span>
              <img
                className="agendarCita-servicio-img"
                src={Images.agendarCita}
                alt=""
              />
              <span className="agendarCita-servicio-texto">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500
              </span>
            </div>
            <form className="formulario-agendar-cita" action="">
              <InputRegister
                title="Fecha y hora:"
                name="date"
                type="date"
                value={inputs.date}
                handle={handleInputsForm}
              />
              <InputRegister
                title="Nombre cliente:"
                name="name"
                type="text"
                value={inputs.name}
                handle={handleInputsForm}
              />
              <InputRegister
                title="peluquero:"
                name="barber"
                type="text"
                value={inputs.barber}
                handle={handleInputsForm}
              />
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AgendarCita;
