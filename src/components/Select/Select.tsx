import React, {MouseEventHandler, useState} from "react";


type SelectPropsType = {
   value: any
   onChange: (value: any) => void
   items: Array<{ title: string, value: any }>
}

export function Select(props: SelectPropsType) {
   const [titleValue, setTitleValue] = useState<string>(props.items[0].title)
   const [collapsed, setCollapsed] = useState<boolean>(true)

   let selectedName = (e: React.MouseEvent<HTMLDivElement>) => {
      console.log(e.currentTarget.textContent)
      if (e.currentTarget.textContent) {
         setTitleValue(e.currentTarget.textContent)
         collapsedHandler()
      }
   }
   let collapsedHandler = () => {
      setCollapsed(!collapsed)
   }
   return (
     <div>
        <div onClick={collapsedHandler}>{titleValue}</div>
        {collapsed && props.items.map(i => <div onClick={selectedName}>{i.title}</div>)}
     </div>
   )
}