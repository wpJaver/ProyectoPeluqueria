import "./MisCitas.css";
import Images from "../../img/Images";
import ItemCitas from "../ItemCitas/ItemCitas";
const MisCitas = () => {
  const itemCita = [
    {
      imagen: Images.Servicio1,
      servicio: "Corte de pelo + Tinte",
      peluquero: "Javier Stiven Sanchez",
      fecha: "15/11/2022",
      hora: "04:00 PM",
      costo: "$90.000",
    },
    {
      imagen: Images.Servicio1,
      servicio: "Corte de pelo + Tinte",
      peluquero: "Javier Stiven Sanchez",
      fecha: "15/11/2022",
      hora: "04:00 PM",
      costo: "$90.000",
    },
    {
      imagen: Images.Servicio1,
      servicio: "Corte de pelo + Tinte",
      peluquero: "Javier Stiven Sanchez",
      fecha: "15/11/2022",
      hora: "04:00 PM",
      costo: "$90.000",
    },
    {
      imagen: Images.Servicio1,
      servicio: "Corte de pelo + Tinte",
      peluquero: "Javier Stiven Sanchez",
      fecha: "15/11/2022",
      hora: "04:00 PM",
      costo: "$90.000",
    },
    {
      imagen: Images.Servicio1,
      servicio: "Corte de pelo + Tinte",
      peluquero: "Javier Stiven Sanchez",
      fecha: "15/11/2022",
      hora: "04:00 PM",
      costo: "$90.000",
    },
  ];
  return (
    <>
      <div className="contain-MisCitas">
        {/* --- CONTENIDO PERFIL --- */}
        <aside className="contain-perfil">
          <div className="contain-buttons-perfil">
            <span className="contain-perfil-title">Hola,</span>
            <span className="contain-perfil-title">Jsparra</span>
            <span className="contain-perfil-body"> Mis citas</span>
          </div>
          <div>
            <img src={Images.powerOff} alt="" />
            <span className="contain-perfil-body">Cerrar sesión</span>
          </div>
        </aside>
        {/* --- CONTENIDO CITAS --- */}
        <div className="contain-citas">
          <span className="contain-citas-title">Mis citas</span>
          <div>
            <ItemCitas item={itemCita} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MisCitas;
