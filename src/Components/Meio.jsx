import "./Meio.css";

function Perfil(props) {
  return (
    <>
      <h3> {props.user} </h3>
      <img src={props.img} />
      <div className="Bio">
      <p> {props.texto1} </p>
      <p> {props.texto2} </p>
      <p> {props.texto3} </p>
      </div>
    </>
  );
}
export default Perfil;


