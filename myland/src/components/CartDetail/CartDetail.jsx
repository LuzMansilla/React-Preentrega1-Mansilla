import React from 'react'
import { useCartContext } from '../CartContext/CartContext'

export const CartDetail = () => {
    const {cartList, TotalDeCompra, vaciarCarro, eliminoUnCuadro} = useCartContext()
    return (
        <div>
            {cartList.map(cuadro => (
                <div className='w-50'>
                    <img src={cuadro.foto} alt="img" className='w-25' />
                    <label>- Precio Unitario: ${cuadro.precio} - Cantidad: {cuadro.cantidad}  </label>
                    <button onClick={() => eliminoUnCuadro(cuadro.id)} className='btn btn-danger'>X</button>
                </div>
            )
            )
            }
            <div className='totalDeCompra'>
                <p>Precio Total de la Compra: ${TotalDeCompra()}</p>
                <button onClick={vaciarCarro} className='btn btn-dark'>Vaciar Compra</button>
                <hr />
            </div>
        </div>
    )
}
