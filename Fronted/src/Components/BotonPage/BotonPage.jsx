import "./BotonPage.css";

const BotonPage = ({ item }) => {
  return item.map(({ texto, ref }) => {
    return <button className="button">{texto}</button>;
  });
};

export default BotonPage;
