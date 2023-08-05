import logo from './Logo-cinza.png'
import whatsapp from './whatsapp.png'
import twitter from './twitter.png'
import twitch from './Twitch.png'
import instagram from './instagram.png'
import styles from './Rodape.module.css'

const Rodape = () => {
  return (
    <footer className={styles.rodape}>

        <div className={styles.primeiraParte}>
            <img src={logo} className={styles.logo} alt='Logo do CodeChella' />
            <div className={styles.social}>
              <p>Acesse nossas redes:</p>
              <ul>
                <li>
                  <a href='https://www.whatsapp.com'>
                    <img src={whatsapp} alt='Logo do whatsapp' />
                  </a>
                </li>
                <li>
                  <a href=''>
                    <img src={twitch} alt='Logo da twitch' />
                  </a>
                </li>
                <li>
                  <a href=''>
                    <img src={instagram}  alt='Logo do Instagram' />
                  </a>
                </li>
                <li>
                  <a href=''>
                    <img src={twitter}  alt='Logo do twitter' />
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