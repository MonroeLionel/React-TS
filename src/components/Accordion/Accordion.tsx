import React from "react";

type AccordionPropsType = {
   titleValue: string
   collapsed: () => void
   accordionCollapsed: boolean
   items: Array<{ title: string, value: any }>
   onClick: (value: any) => void

}

function Accordion(props: AccordionPropsType) {

   return (
     <div>
        <AccordionTitle collapsed={props.collapsed} title={props.titleValue}/>
        {!props.accordionCollapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
     </div>
   )


}

type AccordionBodyPropsType = {
   items: Array<{ title: string, value: any }>
   onClick: (value: any) => void

}

function AccordionBody(props: AccordionBodyPropsType) {
   return (
     <div>
        <ul>
           {props.items.map((item, index) => <li
             onClick={() => {
                props.onClick(item.value)
             }}
             key={index}
           >{item.title}</li>)}
        </ul>
     </div>
   )
}

type AccordionTitlePropsType = {
   title: string
   collapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
   return (
     <div>
        <h3 onClick={props.collapsed}>{props.title}</h3>
     </div>
   )
}

export default Accordion;
