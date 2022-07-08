import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";


//function declaration
function App() {      //компонента должна быть написана с большой буквы
   // делает что то полезное

   //должна вернуть JSX
   return (
     <div>
        <PageTitle title={"this is APP component"}/>
        <PageTitle title={" APP "}/>
        <Rating value={2}/>
        <Accordion titleValue={"Menu"} collapsed={false}/>
        <Accordion titleValue={"User"} collapsed={true}/>
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
        <OnOff onOff={true}/>


     </div>
   );
}

type PageTitlePropsType = {
   title: String
}

function PageTitle(props: any) {
   return (
     <>
        <h1>{props.title}</h1>
     </>
   )
}


export default App;
