import Info from 'components/Info'
import LineUp from 'components/LineUp'
import Lista from 'components/Lista'
import Rodape from 'components/Rodape'
import React from 'react'
import Banner from '../../components/Banner'
import Menu from '../../components/Menu'
import styles from './Inicio.module.css'
import json from 'json/db.json'
import foto from './home.png'
import icone from './icone-ingresso.png'
import { Link } from 'react-router-dom'

const Inicio = () => {

  return (
    <>
    <Menu />
    <Banner imagem="home" titulo={"Boas-vindas ao #CodeChella2023!"} />

    <section className={styles.conteudo}>
      <h2 className={styles.titulo}>/Line-Up/</h2>
      <Info imagem="homepage1" titulo="< 11 e 12 de Março > "
        texto="Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!"
        >

          <div className={styles.containerBotao}>
            <Link className={styles.botao} to={"/ingresso"}>
            <div className={styles.divBotao}>
              Comprar impresso!
              <img src={icone} alt="Icone de bilhete" />
            </div>
            </Link> 
          </div>
  

        

      </Info>

      <LineUp dia="SÁBADO <11/03>">
        <Lista lista={json.sabado[0].headliner} estilo="headliner"/>
        <Lista lista={json.sabado[0].lineup2} estilo="lineup2"/>
        <Lista lista={json.sabado[0].lineup3} estilo="lineup3"/>
        <Lista lista={json.sabado[0].lineup4} estilo="lineup4"/>
      </LineUp>

      <LineUp dia="DOMINGO <12/03>">
        <Lista lista={json.domingo[0].headliner} estilo="headliner"/>
        <Lista lista={json.domingo[0].lineup2} estilo="lineup2"/>
        <Lista lista={json.domingo[0].lineup3} estilo="lineup3"/>
        <Lista lista={json.domingo[0].lineup4} estilo="lineup4"/>
      </LineUp>

    <img src={foto} alt='Jovens se divertindo no festival' className={styles.foto}/>
    </section>

    <Rodape />
    </>
    
    )
}

export default Inicio