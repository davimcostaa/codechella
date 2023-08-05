import Banner from 'components/Banner'
import CardVertical from 'components/CardVertical'
import Legenda from 'components/Legenda'
import Menu from 'components/Menu'
import Rodape from 'components/Rodape'
import React, { useState } from 'react'
import mapa from './Mapa setores 1.png'
import mapaCadeirasSuperiores from './cadeiras_superiores.png'
import mapaCadeirasTerreo from './cadeiras_terreo.png'
import mapaPistaPremium from './pista_premium.png'
import mapaPista from './pista.png'
import styles from './Mapa.module.css'

const Mapa = () => {

  const [fotoMapa, setFotoMapa] = useState(mapa) 

  return (
    <>
    
    <Menu />
    <Banner imagem="mapa de setores" titulo="Mapa de Setores" />

    <section className={styles.conteudo}>

    <section className={styles.containerMapa}>
        <img src={fotoMapa} alt='Mapa' className={styles.fotoMapa}/>

        <div className={styles.setores}>
              <h2 className={styles.titulo}>Legenda:</h2>

              <div onClick={() => setFotoMapa(mapaPistaPremium)} className={styles.divLegenda}> 
                <Legenda imagem="pista-premium" legenda="Pista premium"/>
              </div>

              <div onClick={() => setFotoMapa(mapaPista)} className={styles.divLegenda}>
                  <Legenda imagem="pista" legenda="Pista comum"/>
              </div>
      
              <div onClick={() => setFotoMapa(mapaCadeirasTerreo)} className={styles.divLegenda}>
                <Legenda imagem="cadeiras-terreo" legenda="Cadeiras térreo"/>
              </div>

              <div onClick={() => setFotoMapa(mapaCadeirasSuperiores)} className={styles.divLegenda}> 
                <Legenda imagem="cadeiras-superior" legenda="Cadeiras superiores"/>
              </div>
              
        </div>

    </section>

    <section>

    <h2 className={styles.tituloSetores}>Mais detalhes sobre os setores:</h2>

    <div className={styles.cards}>
      <CardVertical imagem="Mapa de setores2" titulo="Pista" texto="Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade."/>
      <CardVertical recuo="sim" imagem="Mapa de setores3" titulo="Pista Premium" texto="Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área."/>
      <CardVertical imagem="Mapa de setores4" titulo="Cadeiras" texto="Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas."/>
    </div>
    </section>
    </section>
    <Rodape />
    </>
  )
}

export default Mapa