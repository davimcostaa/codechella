import React from 'react'
import styles from './Banner.module.css'

const Banner = ({imagem, titulo}) => {

    const tamanhoTitulo = titulo.length; 

  return (
    
    <section className={styles.banner}
    style={{ backgroundImage: `url('/imagens/banner/${imagem}.png')`}}
    >
      <h1 className={styles.titulo}> {titulo}  </h1>
    </section>
  )
}

export default Banner