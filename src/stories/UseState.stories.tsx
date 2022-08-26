import React, {useState} from "react";

export default {
   title: "Use state demo"
}

function generateData() {
   console.log("generateData")
   return 1
}

export const Example1 = () => {
//useState может принимать функцию которая ретурнит значение и запонимает его
   //   setCounter может приниать так же функцию отдавать в него стейт и получать то что ретурнит

   console.log("Example1")


   const [counter, setCounter] = useState(generateData)


   const changer = (state: number) => {
      return state + 1
   }
   return <>
      <button onClick={() => {
         setCounter(changer)
      }}>+
      </button>
      {counter}
   </>
}