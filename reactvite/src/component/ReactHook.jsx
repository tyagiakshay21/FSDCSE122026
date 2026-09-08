import React,{useState} from 'react'

function ReactHook() {
    const [count,setCount] = useState(0);
    function increaseCounter(){
        //alert('HII');
        setCount(count+10);
    }
    function decreaseCounter(){
        setCount(count-10);
    }
    return(
        <div>
            <h1 style={{color:'red'}}>Working on React Hooks</h1>
            <h1>Counter Value: {count}</h1>
            <button onClick={increaseCounter}>Increment</button>
            <button onClick={decreaseCounter}>Decrement</button>
        </div>
    );
}

export default ReactHook