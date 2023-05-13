import React from 'react'
import styles from './Lista.module.css'

const Lista = ({lista, estilo}) => {

  return (
    <ul className={styles.listaArtistas}>
        {lista.map(item => (
            <li key={item.id} className={`${styles[estilo]}`}> {item.nome}</li>
        ))}
    </ul>
  )
}

export default Lista