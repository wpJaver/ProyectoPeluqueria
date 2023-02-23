import "./SobreNosotros.css";
import BotonPage from "../BotonPage/BotonPage";
import CarrouselImage from "../CarrouselImage/CarrouselImage";
import Images from "../../img/Images";

const SobreNosotros = () => {
  const CarrouselItem = [];
  return (
    <>
      {/* --- PRINCIPAL --- */}
      <div
        className="first-info"
        style={{ backgroundImage: `url(${Images.BannerServicios})` }}
      >
        <div className="first-title">
          <span> Lorem Ipsum </span>
        </div>
        <div className="first-body">
          <span>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas.
          </span>
        </div>
        <BotonPage item={[{ texto: "Agendar cita", ref: "" }]} />
      </div>
      {/* --- FIN PRINCIPAL --- */}
      {/* ---INICIO SEGUNDA INFORMACION--- */}
      <div className="second-info">
        <div className="second-info-text">
          <div className="second-info-text-title">
            <span>Texto llamativo papu</span>
          </div>
          <div className="second-info-text-body">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando
            esencialmente igual al original. Fue popularizado en los 60s con la
            creación de las hojas "Letraset", las cuales contenian pasajes de
            Lorem Ipsum, y más recientemente con software de autoedición, como
            por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
            Ipsum.
          </div>
        </div>
        <div className="second-info-img">
          <img src={Images.BannerServiciosInf} alt="" />
        </div>
      </div>
      {/* ---FIN SEGUNDA INFORMACION --- */}
      {/* --- INICIO  CARROUSEL --- */}
      <div className="contain-carrousel">
        <div className="contain-carrousel-title">
          Explora más en nuestras redes sociales
        </div>
        <ul className="contain-redes-sociales">
          <li>
            <img src={Images.Facebook} alt="Facebook" />
          </li>
          <li>
            <img src={Images.Instagram} alt="Instagram" />
          </li>
          <li>
            {" "}
            <img src={Images.Tiktok} alt="Tiktok" />
          </li>
        </ul>
        <div className="slider">
          <div className="slider-track">
            <CarrouselImage item={CarrouselItem} />
          </div>
        </div>
      </div>
      {/* --- FIN CARROUSEL --- */}
    </>
  );
};

export default SobreNosotros;
