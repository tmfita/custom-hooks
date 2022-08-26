import { useState } from "react"

//todos los hooks deben empezar por "use"
export const useCounter = ( initialValue = 10 ) => {
    const [counter, setCounter] = useState( initialValue )

    const increment = ( value = 1 ) => {
        setCounter(counter + value)
    };

    const decrement = ( value = 1) => {
        setCounter(counter - value)
    };

    const reset = () => {
        setCounter( initialValue )
    };

    return {
        counter,
        increment,
        reset,
        decrement
    }
}