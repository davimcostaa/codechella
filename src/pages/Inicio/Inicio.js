import Info from 'components/Info'
import Rodape from 'components/Rodape'
import React from 'react'
import Banner from '../../components/Banner'
import Menu from '../../components/Menu'
import styles from './Inicio.module.css'

const Inicio = () => {
  return (
    <>
    <Menu />
    <Banner imagem="home" titulo="Boas-vindas ao #CodeChella2023" />

    <section className={styles.conteudo}>
    <Info imagem="homepage1" titulo="< 11 e 12 de Março > "
    texto="Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!"
    >
    </Info>
    </section>


    <Rodape />
    </>
    
    )
}

export default Inicio