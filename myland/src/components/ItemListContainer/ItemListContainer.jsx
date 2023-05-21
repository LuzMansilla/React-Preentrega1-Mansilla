import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'

import './ItemListContainer.css'


export const ItemListContainer =({greeting})=>{

    const [cuadros, setCuadros] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { category } = useParams()

    useEffect(()=>{
        const dbFirestore = getFirestore()
        const queryCollection = collection (dbFirestore, 'Cuadros')

        if (!category) {
            getDocs(queryCollection)
                .then(res => setCuadros (res.docs.map(cuadro =>({id: cuadro.id, ...cuadro.data()}))))
                .catch(error=> console.log(error))
                .finally(()=> setIsLoading(false))
            
        }else{
            const queryCollectionFiltered = query(queryCollection, where('categoria','==',category))
            getDocs(queryCollectionFiltered)
                .then(res => setCuadros (res.docs.map(cuadro =>({id: cuadro.id, ...cuadro.data()}))))
                .catch(error=> console.log(error))
                .finally(()=> setIsLoading(false))
        }
    }, [category])

    return(
        <>
            <h1>{greeting}</h1>
                { isLoading ?
                        <Loading/>
                    :
                        <div className='myCards'>
                            <ItemList cuadros = {cuadros}/>
                        </div>
                }
        </>
    )
}
