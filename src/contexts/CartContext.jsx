import { createContext, useState } from "react"


export const CartContext = createContext([])
export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const addItem = (item, quantity) => {
        const alreadyExists = items.some(itemm => itemm.id === item.id)
        if (!alreadyExists) {
            setItems(prev => [...prev, { ...item, quantity }])}
            else {
            const updatedItems = items.map(itemm => {
                if (itemm.id === item.id) {
                    return {...itemm, quantity: itemm.quantity + quantity}}
                    else {return itemm}
            });
            setItems(updatedItems)}}

    const totalWidget = items.reduce((act, val) => act + val.quantity, 0)

    const removeItem = (id) => {
        const itemFiltered = items.filter(item => item.id !== id)
        setItems(itemFiltered)}

    const clearCart = () => setItems([])

    return (
        <CartContext.Provider value={{ addItem, items, removeItem, clearCart, totalWidget }}>
            {children}
        </CartContext.Provider>)}
