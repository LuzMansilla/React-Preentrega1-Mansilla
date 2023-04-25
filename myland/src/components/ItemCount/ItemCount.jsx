import { useCounter } from "./UseCounter"


const ItemCount = ({initial = 0, stock = 5, onAdd }) =>{
    const{counter, handleSumar, handleRestar} = useCounter(initial, 1, stock)

    return(
        <div>
            <p>Clicks : {counter}</p>
            <button onClick={handleSumar}>+ 1</button> 
            <button onClick={handleRestar}>- 1</button> 
            <button>Agregar al Carrito</button>
        </div>
    )
}
export default ItemCount