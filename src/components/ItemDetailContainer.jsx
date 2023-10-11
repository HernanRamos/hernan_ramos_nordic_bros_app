import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = (props) => {
const [product,setProduct] = useState (null);
const [loading, setLoading] = useState (true);
const { id } = useParams();
useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "ItemCollection", id);
    getDoc(refDoc).then(snapshot => {
        setProduct({ id:snapshot.id, ...snapshot.data()})
    }).finally(() => setLoading(false))
},[id])
if (loading) return <div style={{ color: 'black', fontSize: '50px' }}>Loading...</div>;


  return ( 
    <>
    <h2>DESCRIPCION</h2>
       <ItemDetail product={product}/>
    </>);}