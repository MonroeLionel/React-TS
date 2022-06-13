import React from 'react';
import logo from './logo.svg';
import './App.css';


//function declaration
function App() {      //компонента должна быть написана с большой буквы
    // делает что то полезное

    //должна вернуть JSX
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>

        </div>
    );
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function AppTitle() {
    return (
        <>
            this is APP component
        </>
    )
}

function Accordion() {
    return (
        <div>
            <AccordionTitle/>

            <AccordionBody/>
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
            </ul>
        </div>
    )
}

function AccordionTitle() {
    return (
        <div>
            <h3>menu</h3>
        </div>
    )
}

function Star() {
    return (
        <div>star</div>
    )
}

export default App;
