import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserList } from './UserList'
import { AddUser } from './AddUser'

function App() {
  const [users, setUsers] = useState([
    { id: 101, name: "Tiko", surname:"Gevorgyan", login:"tikgev@gamil.com", password:"tik2004" },
    { id: 102, name: "Ashot", surname:"Manukyan", login:"Ashot_111@gmail.com", password:"AshMan2222" },
    { id: 103, name: "Hayk", surname:"Sahakyan", login:"Haykooo@gmail.com", password:"12hke12"},
  ])
  const addUser = obj => {
    setUsers([...users, { ...obj, id: Date.now() }])
  }

  return (
    <>
      <UserList users={users} />
      <AddUser onAdd={addUser} users={users} />
    </>
  )
}

export default App
