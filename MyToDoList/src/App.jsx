import { useState } from 'react'

import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input/>
        </div>        
      </section>
    </>
  )
}