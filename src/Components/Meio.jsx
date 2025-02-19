import "./Meio.css";

function Perfil(props) {
  return (
    <>
      <h3> {props.user} </h3>
      <img src={props.img} />
      <p> {props.texto} </p>
    </>
  );
}
export default Perfil;


