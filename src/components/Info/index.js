import React from 'react'
import styles from './Info.module.css'

const Info = ({imagem, titulo, texto, children}) => {
  return (
    <section className={styles.info}>
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
            {children}
        </div>
        
    </div>
    </section>
    
  )
}

export default Info