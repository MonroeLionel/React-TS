import React, {MouseEventHandler, useState} from "react";
import css from './Select.module.css';

type SelectPropsType = {
   value: any
   onChange: (value: any) => void
   items: Array<{ title: string, value: any }>
}

export function Select(props: SelectPropsType) {
   const [titleValue, setTitleValue] = useState<string>(props.items[0].title)
   const [collapsed, setCollapsed] = useState<boolean>(false)
   const [hoveredElementValue, setHoveredElementValue] = useState<string>(props.items[0].title)

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
     <div className={css.select}>
        <h3 onClick={collapsedHandler}>{titleValue}</h3>
        <div className={css.items}>
           {collapsed && props.items.map(i => <div
             onMouseEnter={() => {
                setHoveredElementValue(i.title)
             }}
             className={css.item + " " + (hoveredElementValue === i.title ? css.select : "")}
             onClick={selectedName}>

              {i.title}
           </div>)}
        </div>

     </div>
   )
}