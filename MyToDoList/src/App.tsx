import { v4 as uuidv4 } from 'uuid'

import { PlusCircle } from 'phosphor-react'

import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { useState } from 'react'
import { Empty } from './components/List/Empty'

import { Header as ListHeader } from './components/List/Header'
import { Item } from './components/List/Item'



export interface ITask {
  id: string
  text: string
  isChecked: boolean
}

export function App() {

  // we have two attributs
  const [inputValue, setInputValue] = useState('')
 
  const [tasks, setTasks] = useState<ITask[]>([])

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if(currentTask.isChecked){
      return prevValue + 1
    }

    return prevValue
  }, 0)

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
  }

  function handleRemoveTask(id: string){
    const filterTask = tasks.filter((task) => task.id !== id)
    if(!confirm(`Are you whish remove the task? ${id}`)){
      return
    }

    setTasks(filterTask)
  }

  function handleToggleTask({ id, value }: { id: string; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
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
            Create
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
        
        <div className={styles.tasksList}>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {
            tasks.length > 0 ? (
              <div>
                {
                  tasks.map((task) =>(
                    <Item
                      key={task.id}
                      data={task}
                      removeTask={handleRemoveTask}
                      toogleTaskStatus={handleToggleTask}
                    />
                    )
                  )
                }
            </div>
            ):(<Empty/>)
          }
        </div>
      </section>
    </div>
  )
}