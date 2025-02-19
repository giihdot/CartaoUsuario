import "./Lado.css";

function Valores(props) {
  return (
    <>

    <article>
      <h2> VALORES: </h2>
      <ol>
       <li> {props.Valor1} </li>
       <li> {props.Valor2} </li>
       <li> {props.Valor3} </li>
       <li> {props.Valor4} </li>
       <li> {props.Valor5} </li>
       <li> {props.Valor6} </li>
       <li> {props.Valor7} </li>
       </ol>
      </article>
    </>
  );
}
export default Valores;