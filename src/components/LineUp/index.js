import classNames from 'classnames';
import { TemaContext } from 'common/context/Tema';
import { useContext } from 'react';
import styles from './LineUp.module.css'

const LineUp = ({dia, children}) => {

  const { temaBoreal } = useContext(TemaContext);

  return (
    <div className={styles.lineup}>
        <div className={styles.divTitulo}>
            <h2 className={classNames({
            [styles.titulo]: !temaBoreal === true,
            [styles.tituloBoreal]: temaBoreal === true
        })}>{dia}</h2>
        </div>
      <div className={styles.listas}>
        {children}
      </div>     
    </div>
  )
}

export default LineUp