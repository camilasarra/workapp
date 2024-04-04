import React from 'react'
import MyCalendar from './components/Calendar'

import Tasks from './components/Tasks'

export default function App() {
  return (
    <div className='container'>
      <h1>WORKSPACE APP 🐱‍🏍</h1>
      <MyCalendar />
    
        <Tasks />
      </div>
  )
}
