import { useState } from 'react'

import stayles from './App.module.css'
import { Header } from './components/Header'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
    </div>
  )
}