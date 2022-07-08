import React, {useState} from "react";

// type RatingPropsType = {
//    value: 0 | 1 | 2 | 3 | 4 | 5
// }

type Rating = {
   value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating() {
   let [value, setValue] = useState(0)
   console.log(value)
   return (
     <div>
        <Star value={1} setValue={setValue} selected={value > 0}/>
        <Star value={2} setValue={setValue} selected={value > 1}/>
        <Star value={3} setValue={setValue} selected={value > 2}/>
        <Star value={4} setValue={setValue} selected={value > 3}/>
        <Star value={5} setValue={setValue} selected={value > 4}/>
        {/*<Star value={5} setValue={setValue} selected={value > 5}/>*/}


        {/*<Star selected={value > 1}/>*/}
        {/*<Star selected={value > 2}/>*/}
        {/*<Star selected={value > 3}/>*/}
        {/*<Star selected={value > 4}/>*/}

     </div>
   )
}

type StarPropsType = {
   selected: Boolean
   setValue: (Rating: number) => void
   value: number
}

function Star(props: StarPropsType) {
   if (props.selected === true) {
      return <span onClick={() => props.setValue(props.value - 1)}><b>star </b> </span>
   }
   return (
     <span onClick={() => props.setValue(props.value)}>star  </span>
   )
}