import { useState } from "react";

const stockDisponible = 10;

export const ItemCount = () => {
    const [count, setCount] = useState(1);
    const menosCount = () => {
        if (count > 1){setCount(prev => prev - 1);};}
    const masCount = () => {
        if (stockDisponible > count){setCount(prev => prev + 1);};}
    const onAdd = () => {
        alert(count)}




   return (
    <div className="span2">
        <span onClick={menosCount}>-</span>
        <span>{count}</span>
        <span onClick={masCount}>+</span>
        <button onClick={onAdd}>COMPRAR</button>
    </div>
   );
};