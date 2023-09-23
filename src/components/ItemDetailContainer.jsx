import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data/products.json";
import { ItemDetail } from "./ItemDetail";
import { Container } from "react-bootstrap";

export const ItemDetailContainer = (props) => {
const [product,setProduct] = useState (null);
const { id } = useParams();
useEffect(() => {
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const productById = data.find(product => product.id === id);
        resolve(productById)}, 1000);
});
promise.then((data) => setProduct(data));
},[])
if (!product) return <div style={{ color: 'black', fontSize: '50px' }}>Loading...</div>;


return ( 
    <Container>
    <h2>DESCRIPCION</h2>
       <ItemDetail product={product}/>
    </Container>
    );}