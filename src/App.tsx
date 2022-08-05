import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";


//function declaration
function App() {      //компонента должна быть написана с большой буквы
   // делает что то полезное

   //должна вернуть JSX

   let [ratingValue, seRatingValue] = useState<RatingValueType>(0)
   let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
   let [onOff, seOnOff] = useState<boolean>(true)

   return (

     <div>
        <Rating value={ratingValue} onClick={seRatingValue}/>

        <UncontrolledAccordion titleValue={`Menu`}/>

        {/*<PageTitle title={"this is APP component"}/>*/}
        {/*<PageTitle title={" APP "}/>*/}
        {/*<UncontrolledRating value={2}/>*/}
        {/*<Accordion*/}

        {/*  titleValue={"accordionCollapsed"}*/}
        {/*  accordionCollapsed={accordionCollapsed}*/}
        {/*  collapsed={() => {*/}
        {/*     setAccordionCollapsed(!accordionCollapsed)*/}
        {/*  }}/>*/}
        {/*<Accordion titleValue={"User"} collapsed={true}/>*/}
        <UncontrolledRating/>
        {/*<Rating value={0}/>*/}
        {/*<Rating value={1}/>*/}
        {/*<Rating value={2}/>*/}
        {/*<Rating value={3}/>*/}
        {/*<Rating value={4}/>*/}
        {/*<Rating value={5}/>*/}
        <UncontrolledOnOff/>
        <OnOff onOff={onOff} onChange={seOnOff}/>

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
