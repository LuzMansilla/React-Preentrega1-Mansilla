import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"

function ItemDetailContainer() {
    const [cuadro, setCuadro] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {cid} = useParams()

    useEffect(()=>{
        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, 'Cuadros', cid)

        getDoc(queryDoc)
        .then(resp=> setCuadro({id: resp.id, ...resp.data()}))
        .catch(error=>console.log(error))
        .finally(()=>setIsLoading(false))
    },[])

    return (
        <div>
            {isLoading ?
                <Loading/>
                :
                <ItemDetail cuadro={cuadro}/>
            }
        </div>
    )
}

export default ItemDetailContainer