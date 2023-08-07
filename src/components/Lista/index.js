import classNames from 'classnames';
import { TemaContext } from 'common/context/Tema';
import React, { useContext } from 'react'
import styles from './Lista.module.css'

const Lista = ({lista, estilo}) => {

  const { temaBoreal } = useContext(TemaContext);

  return (
    <ul className={styles.listaArtistas}>
        {lista.map(item => (
            <li key={item.id} className={classNames({
              [`${styles[estilo]}`]: true,
              [styles.branco]: temaBoreal === true
          })} > {item.nome}</li>
        ))}
    </ul>
  )
}

export default Lista