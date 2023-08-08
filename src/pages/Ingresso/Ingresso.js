import { IngressoContext } from 'common/context/Ingresso';
import Banner from 'components/Banner'
import React, { useContext, useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import styles from './Ingresso.module.css'
import { IoMdPrint } from 'react-icons/io';
import { TemaContext } from 'common/context/Tema';
import classNames from 'classnames';


const Ingresso = () => {

  const {  formData  } = useContext(IngressoContext);
  const { temaBoreal } = useContext(TemaContext);
  const imagem = temaBoreal ? 'ingresso3' : 'ingresso2';
  const logo = temaBoreal ? 'branco' : 'cinza';

  const componentRef = useRef();

  const imprimirIngresso = useReactToPrint({
    content: () => componentRef.current,
  });
  
  return (
    <>
        <Banner imagem={imagem} titulo="Seu ingresso está aqui!" />

        <section className={classNames({
            [styles.conteudo]: true
        })} ref={componentRef}>

            <h2 className={classNames({
            [styles.titulo]: true,
            [styles.branco]: temaBoreal === true,
        })}>  Uhul, agora sim! Seu ingresso está aqui, <br /> apresente na entrada do evento e divirta-se!</h2>
            <div className={classNames({
            [styles.ingresso]: true,
            [styles.conteudoBoreal]: temaBoreal === true,
            [styles.branco]: temaBoreal === true,
        })}>
              <div className={styles.topo}>
                  <img src={`/imagens/logo-${logo}.png`} alt='Logo cinza do CodeChella' />
                  <img src='/imagens/favicon-branco.png' alt='Favicon branco' />
              </div>

              <div className={styles.info}>
                  <div>
                    <img src='/imagens/Qr code 1.png' alt='QR Code' />
                  </div>

                  <div>
                      <h3 className={classNames({
                          [styles.info_titulo]: true,
                          [styles.branco]: temaBoreal === true,
                      })}> {formData.nomeCompleto} </h3>
                      <p className={classNames({
                          [styles.infos]: true,
                          [styles.branco]: temaBoreal === true,
                      })}> Ingresso Cortesia</p>
                      <p className={classNames({
                          [styles.infos]: true,
                          [styles.branco]: temaBoreal === true,
                      })}>{formData.tipo}</p>
                      <p className={classNames({
                          [styles.infos]: true,
                          [styles.branco]: temaBoreal === true,
                      })}>Data: 11/03</p>
                      <p className={classNames({
                          [styles.infos]: true,
                          [styles.branco]: temaBoreal === true,
                      })}>Local: São Paulo</p>
                  </div>
              </div>
            </div>
            <p className={classNames({
                          [styles.imprimir]: true,
                          [styles.branco]: temaBoreal === true,
                      })} onClick={imprimirIngresso}> <IoMdPrint size={30}/></p>
        </section>
    
    </>
  )
}

export default Ingresso