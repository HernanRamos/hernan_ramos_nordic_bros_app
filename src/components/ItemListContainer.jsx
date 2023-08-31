import { useState, useEffect } from "react";
import data from "../data/products.json";
import { ItemList } from "./ItemList";
import { Container } from "react-bootstrap";

export const ItemListContainer = (props) => {
const [products,setProducts] = useState ([]);
useEffect(() => {
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 3000);
});
promise.then((data) => setProducts(data));
},[])
    return ( 
    <Container>
      <div>{props.greeting}</div>
        <div>
        <ItemList products={products}/>
      </div>
    </Container>
    );}