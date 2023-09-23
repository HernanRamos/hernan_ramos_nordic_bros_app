import { createContext, useState } from "react"

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([])

    const addItem = (item, quantity) => {
        const alreadyExists = items.some(existingItem => existingItem.id === item.id)

        if (!alreadyExists) {
            setItems(prev => [...prev, {...item, quantity}])
        } else {
            const updatedItems = items.map(existingItem => {
                if (existingItem.id === item.id) {
                    return {...existingItem, quantity: existingItem.quantity + quantity}
                } else {
                    return existingItem
                }
            });
            setItems(updatedItems)
        }
    }

    const totalWidget = items.reduce((act, val) => act + val.quantity, 0)

    const removeItem = (id) => {
        const itemFiltered = items.filter(item => item.id !== id)
        setItems(itemFiltered)
    }

    const clearItem = () => setItems([])

    return (
        <CartContext.Provider value={{addItem, items, removeItem, clearItem, totalWidget}}>
            {children}
        </CartContext.Provider>
    )
}
