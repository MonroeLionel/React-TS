import React, {useState} from 'react';
import s from "./OnOff.module.css"

type OnOff = {
   onOff: boolean
   onChange: (e: boolean) => void
}


export function OnOff(props: OnOff) {
   console.log(props)
   return (
     <div>
        <div onClick={() => {
           props.onChange(!props.onOff)
        }} className={props.onOff ? `` + `${s.grid}` : `${s.on}`}>ON
        </div>
        <div onClick={() => {
           props.onChange(!props.onOff)
        }} className={props.onOff ? `${s.off}` : `` + `${s.grid}`}>OFF
        </div>

     </div>
   )
}