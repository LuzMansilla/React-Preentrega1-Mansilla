import { createContext, useContext, useState } from "react"


const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider =({children})=>{
    const [cartList, setCartList] = useState([])

    //para agregar al carrito
    const addToCart = (nuevoCuadro) =>{

        const idx = cartList.findIndex (cuadro => nuevoCuadro.id === cuadro.id)

        if (idx === -1) {
            setCartList([
                ...cartList,
                nuevoCuadro
            ])
            
        } else {
            cartList[idx].cantidad += nuevoCuadro.cantidad
            setCartList([...cartList])
        }
    }
    
    //Eliminar prod por Item

    const eliminoUnCuadro = (cid) =>{
        setCartList(cartList.filter(cuadro => cuadro.id != cid))
    }

    //ahora vacio el carrito
    const vaciarCarro = () => {
        setCartList([])
    }

    //cantidad Total de productos
    const cantTotalCompra = ()=> cartList.reduce((cantidadTotal, cuadro) => cantidadTotal += cuadro.cantidad, 0)

    //para ver el total de la compra
    const TotalDeCompra=()=> cartList.reduce((precioTotal, cuadro) => precioTotal += (cuadro.precio * cuadro.cantidad), 0)

    return(
        <CartContext.Provider 
                value = {{
                    cartList,
                    addToCart,
                    eliminoUnCuadro,
                    vaciarCarro,
                    cantTotalCompra,
                    TotalDeCompra
                }}>
            {children}
        </CartContext.Provider>
    )
}