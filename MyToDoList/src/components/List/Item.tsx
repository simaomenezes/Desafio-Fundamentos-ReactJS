
import { Trash } from 'phosphor-react'

import styles from './Item.module.css'

export function Item(){
    return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" />
          <span className={`${styles.checkbox}`}>
          </span>

          <p className={`${styles.paragraph}`}>
          </p>
        </label>
      </div>
      <button>
        <Trash size={16} color="#808080" />
      </button>
    </div>
    )
}