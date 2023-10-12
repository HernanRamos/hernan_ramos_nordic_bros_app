import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";


export const ItemDetail = ({ product }) => {
const { addItem } = useContext(CartContext)
const onAdd = (count) => addItem (product,count);
  return (
  <div className="item_detail">
    <img className="img_detail"alt="imagen_producto"src={product.img} />
    <div>{product.nombre}</div>
    <div>Stock: {product.stock}</div>
    <div>Precio: ${product.precio}</div>
    <ItemCount stock={product.stock} onAdd={onAdd} />
  </div>);}

