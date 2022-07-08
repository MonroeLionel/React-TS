import React from 'react';
import s from "./OnOff.module.css"

type OnOff = {
   onOff: boolean
}

export function OnOff(props: OnOff) {
   return (
     <div className={s.grid}>
        <div className={props.onOff ? `` : `${s.on}`}>ON</div>
        <div className={props.onOff ? `${s.off}` : ``}>OFF</div>

     </div>
   )
}