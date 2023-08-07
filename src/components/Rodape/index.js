import logo from './Logo-cinza.png'
import logoBranco from './Logo-branco.png'
import whatsapp from './whatsapp.png'
import whatsappBranco from './whatsappBranco.png'
import twitter from './twitter.png'
import twitterBranco from './twitterBranco.png'
import twitch from './Twitch.png'
import twitchBranco from './twitchBranco.png'
import instagram from './instagram.png'
import instagramBranco from './instagramBranco.png'
import styles from './Rodape.module.css'
import { useContext } from 'react'
import { TemaContext } from 'common/context/Tema'

const Rodape = () => {
  const { temaBoreal } = useContext(TemaContext);

  const imagem = temaBoreal ? logoBranco : logo;
  const imagemInstagram = temaBoreal ? instagramBranco : instagram;
  const imagemWhatsapp = temaBoreal ? whatsappBranco : whatsapp;
  const imagemTwitter = temaBoreal ? twitterBranco : twitter;
  const imagemTwitch = temaBoreal ? twitchBranco : twitch;

  return (
    <footer className={`${styles.rodape} ${temaBoreal ? styles.rodapeBoreal : ''}`}>

        <div className={styles.primeiraParte}>
            <img src={imagem} className={styles.logo} alt='Logo do CodeChella' />
            <div className={styles.social}>
              <p>Acesse nossas redes:</p>
              <ul>
                <li>
                  <a href='https://www.whatsapp.com'>
                    <img src={imagemWhatsapp} alt='Logo do whatsapp' />
                  </a>
                </li>
                <li>
                  <a href=''>
                    <img src={imagemTwitch} alt='Logo da twitch' />
                  </a>
                </li>
                <li>
                  <a href=''>
                    <img src={imagemInstagram}  alt='Logo do Instagram' />
                  </a>
                </li>
                <li>
                  <a href=''>
                    <img src={imagemTwitter}  alt='Logo do twitter' />
                  </a>
                </li>
              </ul>
            </div>
        </div>

        <div className={styles.disclaimer}>
              <p>Desenvolvido por Alura.</p>
              <p>Projeto fictício sem fins comerciais.</p>
            </div>

    </footer>
  )
}

export default Rodape