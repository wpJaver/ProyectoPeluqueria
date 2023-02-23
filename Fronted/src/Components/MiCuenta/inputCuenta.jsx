import "./inputCuenta.css";
const inputCuenta = (props) => {
  const { title, type, name, value, handle } = props;
  return (
    <>
      <label className="formulario-label" htmlFor="">
        {title}
        <input
          className="formulario-input"
          type={type}
          //   placeholder={title}
          name={name}
          value={value}
          onChange={handle}
        />
      </label>
    </>
  );
};

export default inputCuenta;
