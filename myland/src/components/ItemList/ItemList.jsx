import { memo } from "react"
import Item from "../Item/Item"

const ItemList = memo (({cuadros}) => {

        return (
            cuadros.map( cuadro =><Item key = {cuadro.id} cuadro = {cuadro}/>)
        )
    }
)
export default ItemList