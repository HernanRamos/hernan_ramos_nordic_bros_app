import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({product}) => {
const {addItem} = useContext(CartContext)
const onAdd = (count) => addItem (product,count);
return (
<div style= {{display: 'flex'}}>
    <h1 style={{ color: 'black' }}>{product.nombre}</h1>
    <img src={product.img}/>
    <div>{product.stock}</div>
    <div>{product.precio}</div>
    <ItemCount stock={product.stock} onAdd={onAdd}/>
</div>
 );
}

