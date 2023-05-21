import { useState } from "react"
import { Link } from "react-router-dom"

import { useCartContext } from "../CartContext/CartContext"

import ItemCount from "../ItemCount/ItemCount"

import './ItemDetail.css'

function ItemDetail({cuadro}) {

    const[isCant, setIsCant]= useState(false)

    const {addToCart} = useCartContext()

    const onAdd = (cantidad)=>{
        addToCart({...cuadro, cantidad})
        setIsCant(true)
    }
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <img src={cuadro.foto} className='carta w-50' alt="image" />
                    <h3>Nombre: {cuadro.nombre}</h3>
                    <h3>Categoria: {cuadro.categoria}</h3>
                    <h3>Tamaño: {cuadro.tamaño}</h3>
                    <h3>Precio: ${cuadro.precio}</h3>
                </div>
                <div className="col-6" >
                    {
                        !isCant ? 
                        
                            <ItemCount onAdd={onAdd}/>
                        
                        : 
                        <div className="botones">
                            <Link to={'/cart'} className="btn btn-danger">Terminar Compra</Link>
                            <Link to={'/'} className="btn btn-success">Seguir la Compra</Link>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
export default ItemDetail