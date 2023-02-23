import "./Home.css";
import NavBar from "../src/Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <>
      <header>
        {" "}
        <NavBar />{" "}
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Home;
