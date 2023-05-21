import { useCounter } from "./UseCounter"
import cart from '/public/cart.svg'

import './ItemCount.css'

const ItemCount = ({initial = 1, stock = 5, onAdd }) =>{

    const{counter, handleSumar, handleRestar} = useCounter(initial, 1, stock)

    return(
        <div className="contador">
            <button onClick={handleRestar}className="btn btn-outline-warning">-</button>
            <label id="carro">
                <img src={cart} alt="" className="carro"/>  
                <div className="counter">{counter}</div>
            </label>
            <button onClick={handleSumar} className="btn btn-outline-warning">+</button> 
            <br /> 
            <button onClick={()=>{onAdd(counter)}} className="btn btn-warning">Agregar al Carrito</button>
        </div>
    )
}
export default ItemCount