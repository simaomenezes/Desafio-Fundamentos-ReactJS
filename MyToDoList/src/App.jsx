import { useState } from 'react'

import styles from './App.module.css'
import { PlusCircle } from 'phosphor-react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input/>
          <Button>
              Criar
              <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>        
      </section>
    </>
  )
}