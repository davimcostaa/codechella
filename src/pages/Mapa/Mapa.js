import Banner from 'components/Banner'
import CardVertical from 'components/CardVertical'
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

    <section>

    <h2 className={styles.tituloSetores}>Mais detalhes sobre os setores:</h2>

    <div className={styles.cards}>
      <CardVertical imagem="Mapa de setores2" titulo="Pista" texto="Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade."/>
      <CardVertical imagem="Mapa de setores3" titulo="Pista Premium" texto="Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área."/>
      <CardVertical imagem="Mapa de setores4" titulo="Cadeiras" texto="Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas."/>
    </div>
    </section>
    </section>
    <Rodape />
    </>
  )
}

export default Mapa