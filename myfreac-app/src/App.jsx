import { useState } from 'react'
import './App.css'
import Usercard from './Usercard.jsx';

function App() {
  const sampleUser = [
    {
      id:1,
      name: "Sathwik Reddy",
      email: "sathwik.reddy@example.com",
      phone: "123-748-4780",
      age: 21,
      isActive: true
    },
    {
      id:2,
      name: "Mani Krishna",
      email: "mani.krishna@example.com",
      phone: "123-748-4780",
      age: 25,
      isActive: true
    },
    {
      id:3,
      name: "Varshitha",
      email: "varshitha12@example.com",
      phone: "123-748-4720",
      age: 23,
      isActive: true
    },
    {
      id:4,
      name: "Sandeep Reddy",
      email: "sandeep.reddyy@example.com",
      phone: "123-748-4780",
      age: 25,
      isActive: false
    },
    {
      id:5,
      name: "Ratnakar Kota",
      email: "ratnakar.kota@example.com",
      phone: "123-748-4780",
      age: 25,
      isActive: false
    }
  ]
  return(
    <div>
      <h1>User Profiles</h1>
      {sampleUser.map((u)=>(
        <Usercard key={u.id} user={u}/>
      ))}
    </div>
  )
}

export default App
