import {useRef, useState} from "react";

export default {
   title: 'input'
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
   const [value, setValue] = useState('')

   return <>
      <input onChange={(event) => {
         const actualValue = event.currentTarget.value;
         setValue(actualValue)
      }
      }/> - {value}
   </>

}


export const GetValueOfUncontrolledInputBButtonPress = () => {
   const [value, seValue] = useState('')
   const inputRef = useRef<HTMLInputElement>(null)

   const save = () => {
      const el = inputRef.current as HTMLInputElement
      seValue(el.value)
   }

   return <>
      <input ref={inputRef}/>
      <button onClick={save}>save</button>
      {value}
   </>

}