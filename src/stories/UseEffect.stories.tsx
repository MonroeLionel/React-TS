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

export const SetTimeoutExample = () => {
   console.log("SetTimeoutExample")


   const [counter, setCounter] = useState(1)
   const [timer, setTimer] = useState(1)


   useEffect(() => {
      setInterval(() => {
         // setTimer(timer + 1) // работать е будет т.к. берет из замыкание а там всегда один
         setTimer(state => state + 1) // работает
      }, 1000)

   }, [])

   return <>
      Hello, {counter} timer-{timer}
      <button onClick={() => {
         setCounter(counter + 1)
      }}>+
      </button>

   </>
}