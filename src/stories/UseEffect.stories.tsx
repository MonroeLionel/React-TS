import React, {useEffect, useState} from "react";
import {clearInterval} from "timers";

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
//
// export const SetIntervalExample = () => {
//    console.log("SetIntervalExample")
//
//
//    const [counter, setCounter] = useState(1)
//    const [timer, setTimer] = useState(1)
//
//
//    useEffect(() => {
//       const intervalID = setInterval(() => {
//          // setTimer(timer + 1) // работать е будет т.к. берет из замыкание а там всегда один
//          setTimer(state => state + 1) // работает
//       }, 1000)
//       return () => {
//          clearInterval(intervalID)
//       }
//    }, [])
//
//    return <>
//       Hello, {counter} timer-{timer}
//       <button onClick={() => {
//          setCounter(counter + 1)
//       }}>+
//       </button>
//
//    </>
// }

export const ResetEffectExample = () => {
   console.log("ResetEffectExample")


   const [counter, setCounter] = useState(1)


   useEffect(() => {
      console.log("Effect occurred" + counter)

      return () => {
         console.log("RESET EFFECT" + counter)
      }

   }, [counter])

   return <>
      Hello, counter: {counter}
      <button onClick={() => {
         setCounter(counter + 1)
      }}>+
      </button>

   </>
}

export const KeysTrackerExample = () => {


   const [text, setText] = useState("")

   console.log("Keys Tracker Example" + text)


   useEffect(() => {
      const handler = (e: KeyboardEvent) => {
         console.log(e.key)
         setText((state) => state + e.key)
      }
      window.addEventListener("keypress", handler)
      return () => {
         window.removeEventListener("keypress", handler)
      }
   }, [])

   return <>
      Hello, {text}


   </>
}


export const SetTimeOutExample = () => {


   const [text, setText] = useState("")

   console.log("SetTimeOutExample")


   useEffect(() => {
      const timeoutID = setTimeout(() => {
         setText("3 second passed")
      }, 3000)
      return () => {
         clearTimeout(timeoutID)
      }
   }, [])

   return <>
      Hello, {text}


   </>
}

