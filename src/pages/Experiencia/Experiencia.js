import { TemaContext } from 'common/context/Tema'
import Info from 'components/Info'
import React, { useContext } from 'react'
import Banner from '../../components/Banner'

const Experiencia = () => {
  const { temaBoreal } = useContext(TemaContext);
  const imagem = temaBoreal ? 'experiencia2' : 'experiencia';

  return (
    <>
    <Banner imagem={imagem} titulo="A Experiência" />
    <section>

    <Info imagem="experiencia1" 
    titulo="Acessibilidade e Inclusão"
    texto="Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!" />

    <Info 
    imagem="experiencia2"
    titulo="Sustentabilidade"
    texto="Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo."
    />

    <Info 
    imagem="experiencia3"
    titulo="Atrações"
    texto="Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!"
    />
    </section>
    </>
  )
}

export default Experiencia