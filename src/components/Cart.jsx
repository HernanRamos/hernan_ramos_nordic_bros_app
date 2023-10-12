import { useContext, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
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
    <h2 className="h2_table">COMPRAS</h2>
    {items.length > 0 ? (
    <>
      <Table>
            <thead className="td_head">
                <tr>
                    <th></th>
                    <th>NOMBRE</th>
                    <th>PRECIO</th>
                    <th>CANTIDAD</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="td_body">
                {items.map(item => (
                 <tr key={item.id}>
                    <td><img className="img_table" src={item.img} alt="imagen_producto" /></td>
                    <td>{item.nombre}</td>
                    <td>{item.precio}</td>
                    <td>{item.quantity}</td>
                    <td>
                        <button className="button_table" onClick={() => removeItem(item.id)}>X</button>
                    </td>
                </tr>
                 ))}
            </tbody>
            <tfoot className="td_head">
                <td></td>
                <td></td>
                <td></td>
                <td>TOTAL</td>
                <td>${total()}</td>
            </tfoot>
      </Table>
      <form className="form" onSubmit={handleComprar}>
            <div className="title">Datos de Comprador</div>
            <div className="subtitle">Tu orden ya esta casi lista!</div>
            <div className="input-container ic1">
                <input
                onChange={handleChange}
                value= {formValues.nombre}
                className="input"
                name="nombre"
                type="text"
                placeholder="Nombre y Apellido" />
            </div>
            <div className="input-container ic2">
                <input
                onChange={handleChange}
                value= {formValues.telefono}
                className="input"
                name="telefono"
                type="text"
                placeholder="Telefono" />
            </div>
            <div className="input-container ic2">
                <input
                onChange={handleChange}
                value= {formValues.email}
                className="input" 
                name="email"
                type="text" 
                placeholder="Email" />
            </div>
            <div className="button">
                <button id="submit" className="submit" type="submit">FINALIZAR COMPRA!</button>
                <ToastContainer/>
            </div>
      </form>        
    </>
    ) : (<p className="msj_vacio">EL CARRITO ESTA VACIO 🛒</p>)}
</>)}
