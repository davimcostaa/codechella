import React from 'react'
import styles from './CardVertical.module.css'

const CardVertical = ( {imagem, titulo, texto} ) => {
  return (
    <div className={styles.container}>
          <div>
                <img 
                alt='Foto'
                src={`/imagens/paginas/${imagem}.png`}
                className={styles.imagem}
                />
            </div>

          <div className={styles.textos}>
              <h2 className={styles.titulo}>{titulo}</h2>
              <p className={styles.texto}>
                  {texto}
              </p>
          </div>

         </div> 
  )
}

export default CardVertical