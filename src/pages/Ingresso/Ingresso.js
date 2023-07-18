import { IngressoContext } from 'common/context/Ingresso';
import Banner from 'components/Banner'
import Menu from 'components/Menu'
import Rodape from 'components/Rodape';
import React, { useContext } from 'react'
import styles from './Ingresso.module.css'

const Ingresso = () => {

  const {  formData  } = useContext(IngressoContext);
  
  return (
    <>
    
        <Menu />
        <Banner imagem="ingresso2" titulo="Seu ingresso está aqui!" />

        <section className={styles.conteudo}>
            <h2 className={styles.titulo}>Uhul, agora sim! Seu ingresso está aqui, <br /> apresente na entrada do evento e divirta-se!</h2>

            
            <div className={styles.ingresso}>
              <div className={styles.topo}>
                  <img src='/imagens/logo-cinza.png' />
                  <img src='/imagens/favicon-branco.png' />
      
              </div>

              <div className={styles.info}>
                  <div>
                    <img src='/imagens/Qr code 1.png' />
                  </div>

                  <div>
                      <h3 className={styles.info_titulo}>Moni Hillman</h3>

                      <p className={styles.infos}>Ingresso Cortesia</p>
                      <p className={styles.infos}>Setor Pista</p>
                      <p className={styles.infos}>Data: 11/03</p>
                      <p className={styles.infos}>Local: São Paulo</p>

                  </div>
              </div>
            </div>
        </section>

    <Rodape />
    
    </>
  )
}

export default Ingresso