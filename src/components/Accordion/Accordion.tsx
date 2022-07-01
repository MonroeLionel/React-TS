import React from "react";

type AccordionPropsType = {
   titleValue: string
   collapsed: boolean
}

function Accordion(props: AccordionPropsType) {

   return (
     <div>
        <AccordionTitle title={props.titleValue}/>
        {!props.collapsed && <AccordionBody/>}
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
}

function AccordionTitle(props: AccordionTitlePropsType) {
   return (
     <div>
        <h3>{props.title}</h3>
     </div>
   )
}

export default Accordion;
