import { useState } from "react";


export const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);
    
    const handleDecreaseCount = () => {
        if (count > 1){setCount(prev => prev - 1);};}
    const handleIncreaseCount = () => {
        if (stock > count){setCount(prev => prev + 1);};}

   return (
    <div className="item_count">
        <button className="button_count1"onClick={ handleDecreaseCount }>-</button>
        <span>{ count }</span>
        <button className="button_count1"onClick={ handleIncreaseCount }>+</button>
        <button className="button_count2"onClick={() => onAdd(count)}>COMPRAR</button>
    </div>);}