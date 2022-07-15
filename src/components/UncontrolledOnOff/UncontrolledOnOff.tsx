import React, {useState} from 'react';
import s from "./OnOff.module.css"

// type OnOff = {
//    onOff: boolean
// }


export function UncontrolledOnOff() {
   let [onOff, seOnOff] = useState<boolean>(true)

   return (
     <div>
        <div onClick={() => {
           seOnOff(!onOff)
        }} className={onOff ? `` + `${s.grid}` : `${s.on}`}>ON
        </div>
        <div onClick={() => {
           seOnOff(!onOff)
        }} className={onOff ? `${s.off}` : `` + `${s.grid}`}>OFF
        </div>

     </div>
   )
}