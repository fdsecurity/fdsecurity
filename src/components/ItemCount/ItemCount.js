import React, { useState } from 'react'

const ItemCount = ({ max=10, inicial=1 }) => {
    
    const  [value, setValue] = useState (inicial)
    
    const handleSuma = () => {
        value < max ? setValue (prev => prev + 1) : alert('no debe ser mayor a 10')
    }
    
    const handleResta = () => {
        value > inicial ? setValue(estadoPrevio => estadoPrevio - 1) : alert('no debe ser menor a 1 producto')
    }
    
    const Alerta = () => {
     alert('Excelente, agregaste los productos a tu carrito')
    }


    return (
        <div>
            <h1>{value}</h1>
            <button onClick={handleSuma}> + </button> <tab/>    
            <button onClick={handleResta}> - </button>
            <p><button onClick={Alerta}>Agregar al Carrito</button></p>
        </div>
    )
}
export default ItemCount