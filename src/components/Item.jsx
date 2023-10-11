import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({ product }) => (
    <Card key={ product.id } className='bidones_space'>
    <Card.Img variant="top" src={product.img} className='img_card' />
    <Card.Body>
      <Card.Title className="card-title h3_productos">{product.nombre}</Card.Title>
      <Card.Text className="card-text h4_productos">{`$${product.precio}`}</Card.Text>
      <Card.Text className="">{product.category}</Card.Text>
      <Card.Text className="">{product.stock}</Card.Text>
      <Link to={`/item/${product.id}`}><Button className='button_bd' variant="primary">COMPRAR</Button></Link>
    </Card.Body>
  </Card>
)

