import Banner from 'components/Banner'
import Menu from 'components/Menu'
import React from 'react'
import styles from './CompraIngresso.module.css'
import Rodape from 'components/Rodape'
import { FaArrowRight } from 'react-icons/fa';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const ComprarIngresso = () => {

    const schema = yup.object().shape({
        nomeCompleto: yup.string()
            .min(4, 'O nome precisa ter mais de 10 caracteres!')
            .max(100)
            .required('O campo nome é obrigatório!')
            .matches(/^[aA-zZ\s]+$/, "Digite um nome válido!"),
        email: yup.string()
                .email('Digite um email válido!')
                .required('O campo e-mail é obrigatório!'),
        dataNascimento: yup.string().required('O data é obrigatória!'),
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data)
    }
  
  return (
    <>
        <Menu />
        <Banner imagem="ingresso1" titulo={"Garanta seu ingresso"} />

        <section className={styles.conteudo}>
            <h2 className={styles.titulo}>Preencha o formulário a seguir:</h2>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputBox}>
                        <label htmlFor="name" className={styles.label}>
                            Nome Completo:
                        </label>

                        <div>
                                <input type="text" id="name" name="name" className={styles.inputField} {...register("nomeCompleto")}/>
                        </div>

                        <p className={styles.erro}>{errors.nomeCompleto?.message}</p>
                </div>

                <div className={styles.inputBox}>
                        <label htmlFor="name" className={styles.label}>
                            Email:
                        </label>

                        <div>
                                <input type="text" id="email" name="email" className={styles.inputField} {...register("email")} />
                        </div>

                        <p className={styles.erro}>{errors.email?.message}</p>
                </div>

                <div className={styles.inputBox}>
                        <label htmlFor="name" className={styles.label}>
                            Data de nascimento:
                        </label>

                        <div>
                                <input type="date" id="data" name="data"  className={styles.inputField} {...register("dataNascimento")}/>
                        </div>

                        <p className={styles.erro}>{errors.dataNascimento?.message}</p>
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