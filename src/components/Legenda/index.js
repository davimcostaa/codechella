import React from 'react'
import styles from './Legenda.module.css'

const Legenda = ({ imagem, legenda }) => {
  return (
    <div className={styles.legenda}>
        <img src={`/imagens/legenda/${imagem}.png`} className={styles.cor} alt='Icone setor' /> 
        <p className={styles.texto}> {legenda} </p>
    </div>
  )
}

export default Legenda