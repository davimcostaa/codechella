import styles from './LineUp.module.css'

const LineUp = ({dia, children}) => {
  return (
    <div className={styles.lineup}>
        <div className={styles.divTitulo}>
            <h2 className={styles.titulo}>{dia}</h2>
        </div>
      <div className={styles.listas}>
        {children}
      </div>     
    </div>
  )
}

export default LineUp