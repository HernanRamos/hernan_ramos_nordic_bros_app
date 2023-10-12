import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import loadingGif from "../assets/img/loading.gif";


export const ItemDetailContainer = (props) => {
const [product,setProduct] = useState (null);
const [loading, setLoading] = useState (true);
const { id } = useParams();
useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "ItemCollection", id);
    getDoc(refDoc).then(snapshot => {
        setProduct({ id:snapshot.id, ...snapshot.data()});})
    .finally(() => {setLoading(false);});
},[id])


if (loading) return (
  <div className="loading">
    <div class="loadingio-spinner-rolling-0e4u6i3hmeck"><div class="ldio-krg53cx027"><div></div></div></div>
  </div>);


  return ( 
    <>
    <h2>DESCRIPCION</h2>
       <ItemDetail product={product}/>
    </>);}