import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import cart from '../assets/Carrito.png';

export const CartWidget = () => {
   const { totalWidget } = useContext(CartContext)
   return(
<Link to="/cart">
   <img src={cart} alt="Cart"></img> <span>{totalWidget}</span>
</Link>

   )
}
