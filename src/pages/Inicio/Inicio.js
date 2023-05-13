import Info from 'components/Info'
import LineUp from 'components/LineUp'
import Lista from 'components/Lista'
import Rodape from 'components/Rodape'
import React from 'react'
import Banner from '../../components/Banner'
import Menu from '../../components/Menu'
import styles from './Inicio.module.css'

const Inicio = () => {

const headliner1 = { 

    "artistas":
[
    {
        "id": 1,
        "nome": "System of a DOM",
    },
]
}

const lineup2 = { 

  "artistas":
[
  {
      "id": 2,
      "nome": "Python Maiden",
  },
  {
      "id": 3,
      "nome": "Apollo Client 2001",
  },
  {
      "id": 4,
      "nome": "Bon Java",
  },
  {
      "id": 5,
      "nome": "NickCallback",
  },
]
}

const lineup3 = { 

  "artistas":
[
  {
      "id": 6,
      "nome": "Linkin Promises",
  },
  {
      "id": 7,
      "nome": "Fullstack Fighters",
  },
  {
      "id": 8,
      "nome": "Papa React",
  },
  {
      "id": 9,
      "nome": "Angular in Chains",
  },
]
}

const lineup4 = { 

  "artistas":
[
  {
      "id": 10,
      "nome": "Agnostic Front-end",
  },
  {
      "id": 7,
      "nome": "SlipkNode",
  },
  {
      "id": 8,
      "nome": "Pink Flutter",
  },
  {
      "id": 9,
      "nome": "Kiss",
  },
]
}

  return (
    <>
    <Menu />
    <Banner imagem="home" titulo="Boas-vindas ao #CodeChella2023" />

    <section className={styles.conteudo}>
      <h2 className={styles.titulo}>/Line-Up/</h2>
      <Info imagem="homepage1" titulo="< 11 e 12 de Março > "
        texto="Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!"
        >
      </Info>

      <LineUp dia="SÁBADO <11/03>">
        <Lista lista={headliner1.artistas} estilo="headliner"/>
        <Lista lista={lineup2.artistas} estilo="lineup2"/>
        <Lista lista={lineup3.artistas} estilo="lineup3"/>
        <Lista lista={lineup4.artistas} estilo="lineup4"/>
      </LineUp>

    </section>

   

    <Rodape />
    </>
    
    )
}

export default Inicio