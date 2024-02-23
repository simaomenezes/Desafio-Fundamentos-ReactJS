import { v4 as uuidv4 } from 'uuid'

import { PlusCircle } from 'phosphor-react'

import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { useState } from 'react'
import { Empty } from './components/List/Empty'




export interface ITask {
  id: string
  text: string
  isChecked: boolean
}

export function App() {

  // we have two attributs
  const [inputValue, setInputValue] = useState('')
 
  const [tasks, setTasks] = useState<ITask[]>([])

  function handleAddTask(){
    if(!inputValue) return;

    // create our task
    const newTask: ITask = {
      id: uuidv4(),
      text: inputValue,
      isChecked: false,
    }

    // Imutabilidade do estado
    setTasks((state) => [
      ...state, newTask
    ])
    
    // set our input empty
    setInputValue('')

    console.log(newTask)

  }

  return (
    <div>
      <Header/>

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick={handleAddTask}>
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