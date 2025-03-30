import React from "react";
import { useState, useEffect } from "react";

export const Time = () => {
const[date, setdate] = useState(new Date());

useEffect(() => {
   const timer = setInterval(() => {
       setdate(new Date());
   }, 1000) 
  
  return function cleanup() {
    clearInterval(timer)
}
})

return(
    <div>
        <p className="text-5xl text-black"> Time : {date.toLocaleTimeString()}</p>
        <br>
        </br>
        <p className="text-2xl text-black"> Date : {date.toLocaleDateString()}</p>

    </div>
)
}

export default Time