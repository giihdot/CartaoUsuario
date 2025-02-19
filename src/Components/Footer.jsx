import "./Footer.css";

function Footer(props) {
  return (
    <>
      <footer className="Junto4">
        <div className="Junto3">
          <div className="Junto1">
            <img className="Img1" src={props.logo} />
            <p> {props.email} </p>
          </div>
          <div className="Junto2">
            <img className="Img2" src={props.icone} />
            <p>{props.insta} </p>
          </div>
        </div>
        <br />
        <p className="Text"> {props.texto} </p>
      </footer>
    </>
  );
}
export default Footer;
