import { IngressoContext } from 'common/context/Ingresso';
import Banner from 'components/Banner'
import Menu from 'components/Menu'
import Rodape from 'components/Rodape';
import React, { useContext, useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import styles from './Ingresso.module.css'
import { IoMdPrint } from 'react-icons/io';


const Ingresso = () => {

  const {  formData  } = useContext(IngressoContext);
  const componentRef = useRef();

  const imprimirIngresso = useReactToPrint({
    content: () => componentRef.current,
  });
  

  return (
    <>
    
        <Menu />
        <Banner imagem="ingresso2" titulo="Seu ingresso está aqui!" />

        <section className={styles.conteudo} ref={componentRef}>
            <h2 className={styles.titulo}>Uhul, agora sim! Seu ingresso está aqui, <br /> apresente na entrada do evento e divirta-se!</h2>
            <div className={styles.ingresso}>
              <div className={styles.topo}>
                  <img src='/imagens/logo-cinza.png' alt='Logo cinza do CodeChella' />
                  <img src='/imagens/favicon-branco.png' alt='Favicon branco' />
      
              </div>

              <div className={styles.info}>
                  <div>
                    <img src='/imagens/Qr code 1.png' alt='QR Code' />
                  </div>

                  <div>
                      <h3 className={styles.info_titulo}>{formData.nomeCompleto}</h3>
                      <p className={styles.infos}>Ingresso Cortesia</p>
                      <p className={styles.infos}>{formData.tipo}</p>
                      <p className={styles.infos}>Data: 11/03</p>
                      <p className={styles.infos}>Local: São Paulo</p>
                  </div>
              </div>
            </div>
            <p className={styles.imprimir} onClick={imprimirIngresso}> <IoMdPrint size={30}/></p>
        </section>

    <Rodape />
    
    </>
  )
}

export default Ingresso