
import { PlusCircle } from 'phosphor-react'

import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { useState } from 'react'
import { Empty } from './components/List/Empty'


export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

export function App() {

  // we have two attributs
  const [inputValue, setInputValue] = useState('')


  console.log(inputValue)
  
  
  return (
    <div>
      <Header/>

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
        
        <div className={styles.tasksList}>
          <Empty/>
        </div>
      </section>
    </div>
  )
}