import { useState } from "react"

export const useCounter = (initialState=10) => {
    
    const [counter, setCounter] = useState(initialState);
    //Definimos las funciones
    const increment = () =>{
        setCounter(counter + 1);
    }

    /*const Reset = () =>{
        setCounter(initialState);
    }*/

    const decrement = () =>{
        setCounter(counter - 1);
    }

    return{
        counter,
        increment,
        //Reset,
        decrement
    }
}
