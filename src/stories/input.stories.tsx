import {ChangeEvent, ChangeEventHandler, useRef, useState} from "react";
import {actions} from "@storybook/addon-actions";

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

export const ConroledInput = () => {
   const [value, setValue] = useState('')

   const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value)
   }

   return <input
     value={value}
     onChange={onChangeInput}

   />
}

export const ConroledCheakbox = () => {
   const [value, setValue] = useState(true)

   const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.checked)
   }

   return <input
     type={"checkbox"}
     checked={value}
     onChange={onChangeInput}

   />
}

export const ConroledSelected = () => {
   const [value, setValue] = useState<string | undefined>(undefined)

   const onChangeInput = (e: ChangeEvent<HTMLSelectElement>) => {
      setValue(e.currentTarget.value)
   }

   return <>
      <select
        value={value}
        onChange={onChangeInput}
      >
         <option>none</option>
         <option value={'1'}>Minsk</option>
         <option value={'2'}>Moscow</option>
         <option value={'3'}>Kiev</option>
      </select>
   </>
}