import "./ItemCitas.css";
import Images from "../../img/Images";

const ItemCitas = ({ item }) => {
  return item.map(({ imagen, servicio, peluquero, fecha, hora, costo }) => {
    return (
      <>
        <div className="contain-item-cita">
          <div className="contain-all-servicio">
            <img className="contain-image" src={imagen} alt="" />
            <div className="contain-servicio-citas">
              <span className="servicio-title">{servicio}</span>
              <span className="servicio-title">peluquero</span>
              <span className="servicio-peluquero">{peluquero}</span>
            </div>
            <div className="contain-fecha">
              <span className="servicio-title">Fecha</span>
              <span className="servicio-peluquero">{fecha}</span>
              <span className="servicio-peluquero">{hora}</span>
            </div>
            <div className="contain-costo">
              <span className="servicio-title">Costo</span>
              <span className="costo-price">{costo}</span>
            </div>
          </div>
          <div className="contain-all-buttons">
            <button className="button-agendar">Re agendar</button>
            <img src={Images.iconTrash} alt="" />
          </div>
        </div>
      </>
    );
  });
};

export default ItemCitas;
