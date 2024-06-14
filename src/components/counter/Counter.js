import React ,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarMinus } from "react-icons/fa";
import { IoRefreshCircle } from "react-icons/io5";
import { MdExposurePlus1 } from "react-icons/md";

const CounterComponent =()=>
    {
        let [counter, setCounter] = useState(0)

function increment(){
    setCounter(counter++);
    
    console.log(counter);
}
function decrement(){
    setCounter(counter--);
    
}
function reset(){
    setCounter(counter);
    counter = 0;
}
        return (
            <div>
            <h1>Hi</h1>
            <h3>{counter}</h3>
            <MdExposurePlus1 onClick={increment} size={'40px'} style={{color:'red',margin:'10px'}}/>
            <FaCalendarMinus onClick={decrement} size={'30px'} style={{color:'red',margin:'10px'}}/>
            <IoRefreshCircle onClick={reset} size={'30px'} style={{color:'red',margin:'10px'}}/>
           
            </div>
        )
            
    
    };

export default CounterComponent ;