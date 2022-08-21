import { Button } from '@chakra-ui/react'
import React, {useState} from "react";

const Counter = () => {
    function Restar(){
        if(counter > 0 ) setCounter(counter-1)
    }
    const [counter, setCounter] =useState(0);
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
        <span>Numero de clicks {counter}</span>
        <Button onClick={()=>setCounter(counter+1)}>+</Button>
        <Button onClick={Restar}>-</Button>
        <Button onClick={()=>setCounter(0)}>Limpiar</Button>

        </div>
    );
}

export default Counter;