import React, {useState} from "react";

export default {
   title: "React memo demo"
}

const NewMessageCounter = (props: { count: number }) => {
   return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
   console.log('qwe')
   return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
   const [counter, setCounter] = useState(0)
   const [users, setUsers] = useState(["dimych", "valera", "artem"])
   return <>
      <button onClick={() => {
         setCounter(counter + 1)
      }}>+
      </button>
      <button onClick={() => {
         setUsers([...users, "qeqweqwe"])
      }}>+
      </button>
      <NewMessageCounter count={counter}/>
      <Users users={users}/>
   </>
}