import { useState } from "react"
import { Link } from "react-router-dom"
import './ItemDetail.css'

function ItemDetail({cuadro}) {
    const[isCant, setIsCant]= useState(false)
    const onAdd = (cantidad)=>{
        console.log('Cantidad Seleccionada: ', cantidad)
        setIsCant(true)
    }
    return (
        <>
            <div>ItemDetail</div>
            <div className="row">
                <div className="col">
                    <img src={cuadro.foto} className='w-50' alt="image" />
                    <h3>Nombre: {cuadro.nombre}</h3>
                    <h3>Categoria: {cuadro.categoria}</h3>
                    <h3>Precio: {cuadro.precio}</h3>
                </div>
                <div className="col d-flex justify-content-center items-align-center">

                </div>
            </div>
            {
                isCant ? 

                <ItemCount onAdd={onAdd}/>
                : 
                <>
                    <Link to={'/cart'} className="btn btn-outline-danger">Terminar Compra</Link>
                    <Link to={'/'} className="btn btn-outline-success">Seguir la Compra</Link>
                </>

            }
        </>
    )
}

export default ItemDetail