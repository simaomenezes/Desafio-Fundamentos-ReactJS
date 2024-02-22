
import { PlusCircle } from 'phosphor-react'

import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'


export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

export function App() {

  
  
  return (
    <div>
      <Header/>

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
          />
          <Button>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
      </section>
    </div>
  )
}