import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"

export const Cart = () => {
    const [formValues, setFormValues] = useState ({
        nombre: "",
        color: "",
        precio: "",
        img: "",
    })
}

const {clearItem, items, removeItem} = useContext(CartContext)

const total = () => {
    items.reduce(
        (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.precio,
        0
    )
}