import "./Home.css";
import ItemServicios from "./Components/ItemServicios/ItemServicios";
import BotonPage from "./Components/BotonPage/BotonPage";
import Images from "./img/Images";
import AgendarCita from "./Components/AgendarCita/AgendarCita";
const Principal = () => {
  const ItemServicio = [
    {
      image: Images.Servicio1,
      nombre: "Nombre",
      texto:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
      price: "$90.000.00",
    },
    {
      image: Images.Servicio1,
      nombre: "Nombre",
      texto:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
      price: "$90.000.00",
    },
    {
      image: Images.Servicio1,
      nombre: "Nombre",
      texto:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
      price: "$90.000.00",
    },
    {
      image: Images.Servicio1,
      nombre: "Nombre",
      texto:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
      price: "$90.000.00",
    },
  ];
  const botonBanner = [{ texto: "Agendar Cita", ref: {} }];
  return (
    <>
      <div className="contain-banner">
        <div className="banner-text">
          <div className="banner-text-title">Lorem Ipsum simplemente texto</div>
          <div className="banner-text-body">
            {" "}
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500
          </div>
          <BotonPage item={botonBanner} />
        </div>
        <div className="banner-img">
          <img src={Images.Banner} alt="" width="667.17px" />
        </div>
      </div>
      {/* Fin Banner */}
      {/* Inicio Conoce nuestros servicios */}
      <div className="conoce-nuestros-servicios">
        <div className="conoce-nuestros-servicios-titulo">
          <span>Conoce nuestros servicios</span>
        </div>
        <div className="conoce-nuestros-servicios-body">
          {" "}
          <span>
            {" "}
            Explora la gran variedad de servicios que Nombre tiene para ti.
          </span>
        </div>
        {/* items */}
        <ItemServicios item={ItemServicio} />
      </div>
      {/* Fin Conoce nuestros servicios */}
    </>
  );
};

export default Principal;
