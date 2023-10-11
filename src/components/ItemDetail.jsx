import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";


export const ItemDetail = ({ product }) => {
const { addItem } = useContext(CartContext)
const onAdd = (count) => addItem (product,count);
  return (
  <div style= {{ display: "flex" }}>
    <h1 style={{ color: "black" }}>{product.nombre}</h1>
    <img alt="imagen_producto"src={product.img} />
    <div>Stock: {product.stock}</div>
    <div>Precio: {product.precio}</div>
    <div>Category: {product.category}</div>
    <ItemCount stock={product.stock} onAdd={onAdd} />
  </div>);}

