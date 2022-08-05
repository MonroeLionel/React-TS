import Accordion from "./Accordion";
import {useState} from "react";

export default {
   title: 'Accordion'
}
let useerArra = [{title: "Димыч", value: 1}, {title: "Валера", value: 2}, {title: "Васян", value: 3}, {
   title: "Семен",
   value: 4
}]
export const MenuCollapsedMode = () => <Accordion onClick={() => {
}} items={useerArra} titleValue={'Menu'} collapsed={() => {
}} accordionCollapsed={true}/>
export const userCollapsedMode = () => <Accordion onClick={() => {
}} items={useerArra} titleValue={'Menu'} collapsed={() => {
}} accordionCollapsed={false}/>
export const ModeChanging = () => {
   const [value, setValue] = useState<boolean>(true)

   return <Accordion
     onClick={(id) => {
        alert(`test ${id}`)

     }}
     items={useerArra}
     titleValue={'Menu'}
     collapsed={() => {
        setValue(!value)
     }}
     accordionCollapsed={value}/>
}
