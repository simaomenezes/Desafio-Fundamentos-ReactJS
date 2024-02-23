import styles from './Header.module.css'

interface Props {
    tasksCounter: number
    checkedTasksCounter: number
}
export function Header({ tasksCounter, checkedTasksCounter }: Props){
    return (
        <header className={styles.container}>
            <aside>
                <p>Created Tasks</p>
                <span>{tasksCounter}</span>
            </aside>

            <aside>
                <p>Tasks doing</p>
                <span>
                    {tasksCounter === 0 ? tasksCounter : `${checkedTasksCounter} de ${tasksCounter}`}
                </span>
            </aside>
        </header>
    )
}