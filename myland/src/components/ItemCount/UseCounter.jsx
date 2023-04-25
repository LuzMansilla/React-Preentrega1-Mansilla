import {useState} from "react"

export const useCounter = (initial = 1 , min, max) =>{
    const [counter, setcounter] = useState(initial)
    
    let handleSumar=()=>{
        if(counter < max){
            setcounter(counter + 1)
    }
    }
    let handleRestar=()=>{
        if(counter > min){
            setcounter(counter - 1)
    }
    }
    return ({counter, handleSumar, handleRestar})
}