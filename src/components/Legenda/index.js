import React, { useContext } from 'react'
import styles from './Legenda.module.css'
import classNames from 'classnames'
import { TemaContext } from 'common/context/Tema';

const Legenda = ({ imagem, legenda }) => {

  const { temaBoreal } = useContext(TemaContext);

  return (
    <div className={styles.legenda}>
        <img src={`/imagens/legenda/${imagem}.png`} className={styles.cor} alt='Icone setor' /> 
        <p className={classNames({
            [styles.texto]: true,
            [styles.branco]: temaBoreal === true
        })}> {legenda} </p>
    </div>
  )
}

export default Legenda