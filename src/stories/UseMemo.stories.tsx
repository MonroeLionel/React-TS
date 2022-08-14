import React, {useMemo, useState} from "react";


export default {
   title: "usememo"
}

export const DifficultCountingExample = () => {

   const [a, setA] = useState(5)
   const [b, setB] = useState(5)

   let reesultA = 1
   let reesultB = 1

   reesultA = useMemo(() => {
      let tempReesultA = 1
      for (let i = 1; i <= a; i++) {
         let fake = 0
         while (fake < 100000000) {
            fake++
            const fakeValue = Math.random()
         }
         reesultA = reesultA * i
      }
      return tempReesultA

   }, [a])


   for (let i = 1; i <= b; i++) {
      reesultB = reesultB * i
   }
   return <>
      <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
      <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
      <hr/>
      <div>Result for a: {reesultA}</div>
      <div>Result for b: {reesultB}</div>
   </>
}


const UsersSecret = (props: { users: Array<string> }) => {
   console.log('qwe')
   return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
   const [counter, setCounter] = useState(0)
   const [users, setUsers] = useState(["dimych", "valera", "artem"])

   const addUsers = () => {
      const newUsers = [...users, "Sveta" + new Date().getTime()]
      setUsers(newUsers)
   }

   const newArray = useMemo(() => {
      return users.filter(u => u.toLowerCase().indexOf("a") > -1)
   }, [users])
   return <>
      <button onClick={() => {
         setCounter(counter + 1)
      }}>+
      </button>
      <button onClick={addUsers}>x</button>

      {counter}
      <Users users={newArray}/>
   </>
}