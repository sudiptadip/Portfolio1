import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Boat from './Boat'
import Contact from './Contact'
import Home from './Home'
import Information from './Information'
import Showcase from './Showcase'
import Cricbuzz from './Cricbuzz'
import Bluefly from './Bluefly'

export default function AllRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/:id' element={<Showcase/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/information' element={<Information/>} />
      <Route path='/boat' element={<Boat/>}/>
      <Route path='/cricbuzz' element={<Cricbuzz/>}/>
      <Route path='/bluefly' element={<Bluefly/>}/>
    </Routes>
  )
}
