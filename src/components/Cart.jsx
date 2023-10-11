import { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { getFirestore, collection, addDoc} from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Cart = () => {
    const { items, removeItem, clearCart } = useContext(CartContext);
    const notifyWr = () => toast.warn('TODOS LOS CAMPOS SON OBLIGATORIOS!', {position: "top-center",autoClose: 1000,hideProgressBar: false,closeOnClick: true,pauseOnHover: false,draggable: false,progress: false,theme: "colored",});
    const [formValues, setFormValues] = useState({
        nombre:"",
        telefono:"",
        email:"",});
    const total = () => items.reduce((acumulador, valorActual) => acumulador + valorActual.quantity * valorActual.precio,0);
    
    const handleChange = (ev) => {
        setFormValues(prev => ({...prev, [ev.target.name] : ev.target.value,}))}
    const handleComprar = (e) => {
        e.preventDefault();
        if (!formValues.nombre || !formValues.telefono || !formValues.email){notifyWr();}
        else{sendOrder()}}
   
    const sendOrder = () => {
        const order = {
            buyer:formValues,
            items:items,
            total:total(),}
        const db = getFirestore()
        const orderCollection = collection(db, "Orders")
        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                setFormValues({
                    nombre:"",
                    telefono:"",
                    email:"",})
                clearCart();}});}

                
  return (
<>
    <h1 style={{ color: "red"}}>Cart</h1>
    {items.length > 0 ? (
    <>
      <table>
            <thead>
                <tr>
                    <th>NOMBRE</th>
                    <th></th>
                    <th>PRECIO</th>
                    <th>CANTIDAD</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                 <tr key={item.id}>
                    <td>{item.nombre}</td>
                    <td>{item.precio}</td>
                    <td>{item.quantity}</td>
                    <td>
                        <button onClick={() => removeItem(item.id)}>ELIMINAR</button>
                    </td>
                </tr>
                 ))}
            </tbody>
            <tfoot>
                <div>TOTAL</div>
                <div>{total()}</div>
            </tfoot>
      </table>
      <form class="form" onSubmit={handleComprar}>
            <div class="title">Ingresar datos de comprador</div>
            <div class="subtitle">Haz tu consulta!</div>
            <div class="input-container ic1">
                <input
                onChange={handleChange}
                value= {formValues.nombre}
                class="input"
                name="nombre"
                type="text"
                placeholder="Nombre y Apellido" />
            </div>
            <div class="input-container ic2">
                <input
                onChange={handleChange}
                value= {formValues.telefono}
                class="input"
                name="telefono"
                type="text"
                placeholder="Telefono" />
            </div>
            <div class="input-container ic2">
                <input
                onChange={handleChange}
                value= {formValues.email}
                class="input" 
                name="email"
                type="text" 
                placeholder="Email" />
            </div>
            <div class="button">
                <button id="submit" class="submit" type="submit">COMPRAR</button>
                <ToastContainer/>
            </div>
      </form>
                
    </>
    ) : (<p>No hay items en el carrito.</p>)}
</>
  )}
