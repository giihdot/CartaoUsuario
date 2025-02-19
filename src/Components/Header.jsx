import "./Header.css";

function Titulo(props) {
  return (
    <>

    <div className="Juntos">
      <h1> {props.titulo} </h1>
      <img className="Img_L" src={props.imagem} />
    </div>
    </>
  );
}
export default Titulo;