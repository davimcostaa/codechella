import Banner from 'components/Banner'
import Legenda from 'components/Legenda'
import Menu from 'components/Menu'
import Rodape from 'components/Rodape'
import React from 'react'
import mapa from './Mapa setores 1.png'
import styles from './Mapa.module.css'

const Mapa = () => {
  return (
    <>
    
    <Menu />
    <Banner imagem="mapa de setores" titulo="Mapa de Setores" />

    <section className={styles.conteudo}>

    <section className={styles.containerMapa}>
        <img src={mapa} alt='Mapa' className={styles.fotoMapa}/>

        <div className={styles.setores}>
              <h2 className={styles.titulo}>Legenda:</h2>

              <Legenda imagem="pista-premium" legenda="Pista premium"/>
              <Legenda imagem="pista" legenda="Pista comum"/>
              <Legenda imagem="cadeiras-terreo" legenda="Cadeiras térreo"/>
              <Legenda imagem="cadeiras-superior" legenda="Cadeiras superiores"/>
        </div>
    </section>
    
    </section>
    <Rodape />
    </>
  )
}

export default Mapa