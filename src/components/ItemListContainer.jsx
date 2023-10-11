import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { Container } from "react-bootstrap";
import { getFirestore, getDocs, collection} from "firebase/firestore";


export const ItemListContainer = (props) => {
const [products,setProducts] = useState ([]);
const [loading, setLoading] = useState (true)
const { id } = useParams();
useEffect(() => {
  const db = getFirestore();
  const refCollection = collection(db, "ItemCollection");
  getDocs(refCollection).then((snapshot) => {
     if (snapshot.size === 0) console.log("no results");
     else {
      const allProducts = snapshot.docs.map(doc => {
         return { id: doc.id, ...doc.data()};
      });
      const filteredProducts = id ? allProducts.filter(product => product.category === id) : allProducts;
      setProducts(filteredProducts);
   }
}).finally(() => {setLoading(false)})
},[id]);

if (loading) return <div>Loading...</div>

    return ( 
    <Container>
      <div>{props.greeting}</div>
        <div>
        <ItemList products={products}/>
      </div>
    </Container>)}