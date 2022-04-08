import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//import Contexto from "../context/Contexto"

export default function ProductoCarrito(props) {
  //guardo lo que me pasan por props
  const { nombre } = props;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
