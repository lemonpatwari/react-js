import {useState} from "react";

export default function Counter() {
const [count,setCount] = useState(0)
    const increaseValue = ()=>{
        setCount(count+1);
    }

    function decriseValue() {
        setCount(count-1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={()=>increaseValue()} className='btn btn-info'>+</button>
            <button onClick={()=>decriseValue()} className='btn btn-secondary'>-</button>
        </div>
    )
}