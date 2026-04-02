import { useState } from "react";

export function useInterval(initialMinorValue:number, initialHigherValue: number){
    
    const [minor, setMinor] = useState(initialMinorValue);
    const [higher, setHigher] = useState(initialHigherValue);

    function setInterval(minor:number,higher:number){
        setMinor(minor);
        setHigher(higher);
    }

    return {
        minor,
        higher,
        setInterval
    }

}