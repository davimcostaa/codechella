import React, { useContext } from 'react'
import styles from './CardVertical.module.css'
import { TemaContext } from 'common/context/Tema';
import classNames from 'classnames';

const CardVertical = ( {imagem, titulo, texto, recuo} ) => {

  const larguraTela = window.screen.width;

  const { temaBoreal } = useContext(TemaContext);

  return (
    <>
  
    {
      recuo && larguraTela > 800
      ?
      <div className={styles.containerRecuo}>
          <div>
                <img 
                alt='Foto'
                src={`/imagens/paginas/${imagem}.png`}
                className={styles.imagem}
                />
            </div>

          <div className={styles.textos}>
              <h2 className={classNames({
                  [styles.titulo]: true,
                  [styles.branco]: temaBoreal === true
              })}> {titulo}</h2>
              <p className={classNames({
                  [styles.texto]: true,
                  [styles.branco]: temaBoreal === true
              })}>
                  {texto}
              </p>
          </div>

         </div> 
         :
         <div className={styles.container}>
          <div>
                <img 
                alt='Foto'
                src={`/imagens/paginas/${imagem}.png`}
                className={styles.imagem}
                />
            </div>

          <div className={styles.textos}>
              <h2 className={classNames({
                  [styles.titulo]: true,
                  [styles.branco]: temaBoreal === true
              })}> {titulo}</h2>
              <p className={classNames({
                  [styles.texto]: true,
                  [styles.branco]: temaBoreal === true
              })}>
                  {texto}
              </p>
          </div>

         </div> 
    }

    
         </>
  )
}

export default CardVertical