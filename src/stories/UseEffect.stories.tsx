import React, {useEffect, useState} from "react";

export default {
   title: "UseEffect demo"
}


export const Example1 = () => {
   console.log("Example1")


   const [counter, setCounter] = useState(1)

   useEffect(() => {
      console.log("UseEffect")
      document.title = counter.toString()
      //тут находится любая асихронщина
      //api.getUsers().then("")
// выполняется всегда при перерисовки
   })

   useEffect(() => {
      console.log("UseEffect")
      document.title = counter.toString()
      //тут находится любая асихронщина
      //api.getUsers().then("")
//выполяется только в первый рендер
   }, [])

   useEffect(() => {
      console.log("UseEffect")
      document.title = counter.toString()
      //тут находится любая асихронщина
      //api.getUsers().then("")
//переррисовка из-за изменения коутера
   }, [counter])

   return <>
      Hello, {counter}
      <button onClick={() => {
         setCounter(counter + 1)
      }}>+
      </button>

   </>
}