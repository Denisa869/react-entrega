import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ItemCount from "./itemCount";

function Card2({ item }) {
  return ( 
    <section className="row">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.src}/> 
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.desc}
          </Card.Text>
          <span>${item.price}</span>
          <br />
          <small>Category {item.category} </small>
          <ItemCount stock={item.stock} />
          <Link to={`/detail/${item.id}`}>
          <Button variant="primary">Ver mas</Button></Link>
        </Card.Body>
      </Card>
    </section>
  );
}

export default Card2;
