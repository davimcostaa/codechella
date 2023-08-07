import classNames from 'classnames';
import { TemaContext } from 'common/context/Tema';
import React, { useContext } from 'react'
import styles from './Banner.module.css'

const Banner = ({imagem, titulo}) => {

  const { temaBoreal } = useContext(TemaContext);

  return (
    
    <section className={styles.banner}
    style={{ backgroundImage: `url('/imagens/banner/${imagem}.png')`}}
    >
      <h1 className={classNames({
            [styles.titulo]: true,
            [styles.tituloBoreal]: temaBoreal === true
        })}> {titulo}  </h1>
    </section>
  )
}

export default Banner