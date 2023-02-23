import "./InputAgendar.css";
const InputAgendar = (props) => {
  const { title, type, name, value, handle } = props;
  return (
    <>
      <label className="label-AgendarCita" htmlFor="">
        {title}
        <input
          className="input-AgendarCita"
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

export default InputAgendar;
