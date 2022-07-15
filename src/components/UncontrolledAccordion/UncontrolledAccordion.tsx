import React, {useState} from "react";

type AccordionPropsType = {
   titleValue: string
   // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
   // let collapsed = true
   let [collapsed, setCollapsed] = useState(true)

   return (
     <div>
        <AccordionTitle collapsed={collapsed} callBack={setCollapsed} title={props.titleValue}/>
        {/*<button onClick={() => setCollapsed(!collapsed)}>x</button>*/}
        {!collapsed && <AccordionBody/>}

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
   callBack: (collapsed: boolean) => void
   collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
   return (
     <div>
        <h3 onClick={() => props.callBack(!props.collapsed)}>{props.title}</h3>
     </div>
   )
}

export default UncontrolledAccordion;
