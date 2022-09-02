import { useState } from "react";

export const Contador = ({ stock, initial = 1, onAdd }) => {
    const [contador, setContador] = useState(initial)

    const aumentarContador = () => {
        if (contador < stock) setContador(contador + 1)
    }
    const disminuirContador = () => {
        if (contador > initial) setContador(contador - 1)
    }


    return (
        <>
            <button onClick={disminuirContador}>-</button>
            <span>{contador}</span>
            <button onClick={aumentarContador}>+</button>
            <div><button disable={contador === 0} onClick={() => { onAdd(contador) }}>Agregar al carrito</button></div>
        </>
    );
}