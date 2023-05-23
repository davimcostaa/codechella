import Banner from 'components/Banner'
import Menu from 'components/Menu'
import React from 'react'
import styles from './CompraIngresso.module.css'
import Rodape from 'components/Rodape'
import { FaArrowRight } from 'react-icons/fa';

const ComprarIngresso = () => {
  return (
    <>
        <Menu />
        <Banner imagem="ingresso1" titulo={"Garanta seu ingresso"} />

        <section className={styles.conteudo}>
            <h2 className={styles.titulo}>Preencha o formulário a seguir:</h2>

            <form className={styles.form}>
                <div className={styles.inputBox}>
                        <label for="name" className={styles.label}>
                            Nome Completo:
                        </label>

                        <div>
                                <input type="text" id="name" name="name"  className={styles.inputField} />
                        </div>
                </div>
                <div className={styles.inputBox}>
                        <label for="name" className={styles.label}>
                            Email:
                        </label>

                        <div>
                                <input type="email" id="email" name="email"  className={styles.inputField} />
                        </div>
                </div>

                <div className={styles.inputBox}>
                        <label for="name" className={styles.label}>
                            Data de nascimento:
                        </label>

                        <div>
                                <input type="date" id="data" name="data"  className={styles.inputField} />
                        </div>
                </div>


                <button type="submit" className={styles.botao}>
                    Avançar! 
                    <FaArrowRight />
                </button>

            </form>


        </section>


        <Rodape />
    </>

  )
}

export default ComprarIngresso