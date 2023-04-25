import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import miPromesa from "../ItemListContainer/MiPromesa/MiPromesa"
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer() {
    const [cuadro, setCuadro] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {cid} = useParams()
    useEffect(()=>{
        miPromesa(cid)
        .then(resp=> setCuadro(resp))
        .catch(error=>console.log(error))
        .finally(()=>setIsLoading(false))
    },[])
    return (
        <div>
            {isLoading ?
                <h2>Cargando...</h2>
                :
                <ItemDetail cuadro={cuadro}/>
        }
        </div>
    )
}

export default ItemDetailContainer