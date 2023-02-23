import "./ItemServicios.css";
import "../../img/Images";
const ItemServicios = ({ item }) => {
  return item.map(({ image, nombre, texto, price }) => {
    return (
      <div className="contain-servicio">
        <div className="contain-servicio-img">
          <img src={image} alt="" />
        </div>
        <div className="contain-servicio-text">
          <div className="contain-servicio-text-title">{nombre}</div>
          <div className="contain-servicio-text-body">{texto}</div>
        </div>
        <div className="contain-servicio-price">{price}</div>
        <button className="servicio-button">!Agendar tu cita¡</button>
      </div>
    );
  });
};

export default ItemServicios;
