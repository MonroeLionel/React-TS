import React from "react";

type AccordionPropsType = {
   titleValue: string
   collapsed: () => void
   accordionCollapsed: boolean
}

function Accordion(props: AccordionPropsType) {

   return (
     <div>
        <AccordionTitle collapsed={props.collapsed} title={props.titleValue}/>
        {!props.accordionCollapsed && <AccordionBody/>}
     </div>
   )


}

function AccordionBody() {
   return (
     <div>
        <ul>
           <li>1</li>
           <li>2</li>
           <li>3</li>
           <li>3</li>
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
