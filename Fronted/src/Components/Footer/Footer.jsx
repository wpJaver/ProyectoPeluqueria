import "./Footer.css";
import Images from "../../img/Images";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      {/* <span>IMAGEN</span> */}
      <img src={Images.LogoFooter} alt="" />
      <ul className="footer-phone">
        <li>
          <Link to={"/sobreNosotros"}>Sobre Nosotros</Link>
        </li>
        <li>Mi cuenta</li>
        <li>!Agenda tu cita¡</li>
        {/* <li>Llamada importante 1</li> */}
      </ul>
      <ul className="footer-img">
        <li>
          {" "}
          <img src={Images.Facebook} alt="Facebook" />
        </li>
        <li>
          <img src={Images.Instagram} alt="Instagram" />
        </li>
        <li>
          <img src={Images.Tiktok} alt="Tiktok" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
