import React from "react";


type SelectPropsType = {
   value: any
   onChange: (value: any) => void
   items: Array<{ title: string, value: any }>
}

export function Select(props: SelectPropsType) {
   return (
     <div>
        <div>{}</div>
        {props.items.map(i => <div>{i.title}</div>)}
     </div>
   )
}