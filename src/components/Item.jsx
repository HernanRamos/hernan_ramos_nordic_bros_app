import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({product}) => (
    <Card key={product.id} style={{ width: '18rem' }}>
    <Card.Img style={{width:"400px"}} variant="top" src={product.img} />
    <Card.Body>
      <Card.Title>{product.nombre}</Card.Title>
      <Card.Text>
       {product.precio}
      </Card.Text>
      <Button variant="primary">COMPRAR</Button>
    </Card.Body>
  </Card>
)

