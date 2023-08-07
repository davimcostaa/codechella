import Info from 'components/Info'
import LineUp from 'components/LineUp'
import Lista from 'components/Lista'
import Rodape from 'components/Rodape'
import React, { useContext } from 'react'
import Banner from '../../components/Banner'
import Menu from '../../components/Menu'
import styles from './Inicio.module.css'
import json from 'json/db.json'
import foto from './home.png'
import fotoBoreal from './home-boreal.png'
import icone from './icone-ingresso.png'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { TemaContext } from 'common/context/Tema'

const Inicio = () => {

  const { temaBoreal } = useContext(TemaContext);
  const imagem = temaBoreal ? 'home-boreal' : 'home';
  const imagemHome = temaBoreal ? 'homepage_boreal' : 'homepage1';
  const imagemSecundaria = temaBoreal ? fotoBoreal : foto;

  return (
    <>
    <Menu />
    <Banner imagem={imagem} titulo={"Boas-vindas ao #CodeChella2023!"} />

    <section className={classNames({
            [styles.conteudo]: true,
            [styles.conteudoBoreal]: temaBoreal === true
        })}>
      <h2 className={classNames({
            [styles.titulo]: true,
            [styles.branco]: temaBoreal === true
        })}> /Line-Up/</h2>

      <Info imagem={imagemHome} titulo="< 11 e 12 de Março > "
        texto="Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!"
        >

          <div className={styles.containerBotao}>
            <Link className={styles.botao} to={"/comprar-ingresso"}>
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

    <img src={imagemSecundaria} alt='Jovens se divertindo no festival' className={styles.foto}/>
    </section>

    <Rodape />
    </>
    
    )
}

export default Inicio