import { useState, useEffect } from "react";
import data from "../data/products.json";
import { ItemDetail } from "./ItemDetail";
import { Container } from "react-bootstrap";

export const ItemListDetailContainer = (props) => {
const [product,setProduct] = useState ([]);
useEffect(() => {
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(data[0]), 3000);
});
promise.then((data) => setProduct(data));
},[])
if (!product) return <div>Loading...</div>;
    return ( 
    <Container>
      <div>DETALLE</div>
       <ItemDetail product={product}/>
    </Container>
    );}