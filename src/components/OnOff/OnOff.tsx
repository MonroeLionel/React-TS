import React, {useState} from 'react';
import s from "./OnOff.module.css"

type OnOff = {
   onOff: boolean
   seOnOff: (e: boolean) => void
}


export function OnOff(props: OnOff) {

   return (
     <div>
        <div onClick={() => {
           props.seOnOff(!props.onOff)
        }} className={props.onOff ? `` + `${s.grid}` : `${s.on}`}>ON
        </div>
        <div onClick={() => {
           props.seOnOff(!props.onOff)
        }} className={props.onOff ? `${s.off}` : `` + `${s.grid}`}>OFF
        </div>

     </div>
   )
}