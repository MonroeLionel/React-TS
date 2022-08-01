import {Select} from "./Select";

export default {
   title: 'Select'
}
let useerArra = [{title: "Димыч", value: 1}, {title: "Валера", value: 2}, {title: "Васян", value: 3}]

export const MenuColapsed = () => {


   return (
     <Select
       value={'test'}
       onChange={() => {
       }}
       items={useerArra}/>
   )
}