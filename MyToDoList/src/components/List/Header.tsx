import styles from './Header.module.css'

export function Header(){
    return (
        <header className={styles.container}>
            <aside>
                <p>Created Tasks</p>
                <span></span>
            </aside>

            <aside>
                <p>Tasks doing</p>
                <span></span>
            </aside>
        </header>
    )
}