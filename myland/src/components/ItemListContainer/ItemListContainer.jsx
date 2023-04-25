import miPromesa from './MiPromesa/MiPromesa'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './ItemListContainer.css'


export const ItemListContainer =({greeting})=>{

    const [cuadros, setCuadros] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { category } = useParams()

    useEffect(()=>{
        if (!category) {
            miPromesa()
            .then( resultado=> { 
                setCuadros(resultado)
            })
            .catch( error => console.log(error) )
            .finally(()=> setIsLoading(false))
        }else{
            miPromesa()
            .then( resultado=> { 
                setCuadros(resultado.filter(cuadro=>cuadro.categoria === category))
            })
            .catch( error => console.log(error) )
            .finally(()=> setIsLoading(false))
        }
    }, [category])

    return(
        <>
            <h1>{greeting}</h1>
            <div className='myCards'>
                { isLoading ?
                    <h2>Cargando...</h2>
                    :
                    <ItemList cuadros = {cuadros}/>
                }
            </div>
        </>
    )
}
