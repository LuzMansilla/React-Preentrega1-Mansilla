import Item from "../Item/Item"

const ItemList = ({cuadros}) => {

    return (
        cuadros.map( cuadro => <Item key = {cuadro.id} cuadro = {cuadro}/>)
    )
}
export default ItemList