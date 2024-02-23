import styles from './Empty.module.css'

import Clipboard from '../../assets/Clipboard.svg'

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={Clipboard} alt="ícone de prancheta" />
      <p>
        <strong>Do you not yet on register tasks</strong>
        Create task and organizing the itens to do
      </p>
    </div>
  )
}