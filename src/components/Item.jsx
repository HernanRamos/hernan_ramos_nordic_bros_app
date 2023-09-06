import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({product}) => (

    <Card key={product.id} style={{ width: '300px'}}>
    <Card.Img style={{width:"200px"}} variant="top" src={product.img} />
    <Card.Body >
      <Card.Title>{product.nombre}</Card.Title>
      <Card.Text>
       {product.precio}
      </Card.Text>
      <Link to={`/item/${product.id}`}><Button variant="primary">COMPRAR</Button></Link>
    </Card.Body>
  </Card>

)

