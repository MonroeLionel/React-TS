import React, {useReducer} from "react";
import {reducer} from "./Reducer";

type AccordionPropsType = {
   titleValue: string
   // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
   // let collapsed = true
   //let [collapsed, setCollapsed] = useState(true)
   let [collapsed, dispatch] = useReducer(reducer, {collapsed: true})

   return (
     <div>
        {/*<AccordionTitle collapsed={collapsed} callBack={setCollapsed} title={props.titleValue}/>*/}
        <AccordionTitle collapsed={collapsed.collapsed} callBack={dispatch} title={props.titleValue}/>
        {/*<button onClick={() => setCollapsed(!collapsed)}>x</button>*/}
        {!collapsed.collapsed && <AccordionBody/>}

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
           <li>4</li>
        </ul>
     </div>
   )
}

type AccordionTitlePropsType = {
   title: string
   // callBack: (collapsed: boolean) => void
   callBack: any
   collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
   return (
     <div>
        {/*<h3 onClick={() => props.callBack(!props.collapsed)}>{props.title}</h3>*/}
        <h3 onClick={() => props.callBack({type: "TOGGLE-COLLAPSED"})}>{props.title}</h3>
     </div>
   )
}

export default UncontrolledAccordion;
