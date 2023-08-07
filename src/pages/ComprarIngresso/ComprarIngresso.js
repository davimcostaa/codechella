import Banner from 'components/Banner'
import Menu from 'components/Menu'
import React, { useContext } from 'react'
import styles from './CompraIngresso.module.css'
import Rodape from 'components/Rodape'
import { FaArrowRight } from 'react-icons/fa';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IngressoContext } from 'common/context/Ingresso'
import { useNavigate } from 'react-router-dom'

const ComprarIngresso = () => {

    const navigate = useNavigate();
    const {  setFormData  } = useContext(IngressoContext);
    
    const schema = yup.object().shape({
        nomeCompleto: yup.string()
            .min(4, 'O nome precisa ter mais de 10 caracteres!')
            .max(100)
            .required('O campo nome é obrigatório!')
            .matches(/^[aA-zZ\s]+$/, "Digite um nome válido!"),
        email: yup.string()
                .email('Digite um email válido!')
                .required('O campo e-mail é obrigatório!'),
        dataNascimento: yup.string().required('A data é obrigatória!')
        .test('maiorIdade', 'Você deve ter pelo menos 18 anos para prosseguir.', function (value) {
            // Função de validação personalizada para verificar a idade
            const dataAtual = new Date();
            const dataNascimento = new Date(value);
            let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
            const diffMes = dataAtual.getMonth() - dataNascimento.getMonth();
            if (diffMes < 0 || (diffMes === 0 && dataAtual.getDate() < dataNascimento.getDate())) {
                idade--;
            }
            return idade >= 18;
        }),
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        setFormData(data)
        navigate('/ingresso')
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

                <div className={styles.containerInputs}>

                
                <div className={styles.inputBox}>
                        <label htmlFor="name" className={styles.label}>
                            Tipo de ingresso:
                        </label>

                        <div>
                            <select className={styles.inputFieldShared} {...register("tipo")}>
                                <option disabled>Tipo do ingresso</option>
                                <option value="Pista premium" >Pista premium</option>
                                <option value="Pista">Pista</option>
                                <option value="Comum">Comum</option>
                            </select>
                        </div>


                </div>

                <div className={styles.inputBox}>
                        <label htmlFor="name" className={styles.label}>
                            Data de nascimento:
                        </label>

                        <div>
                                <input type="date" id="data" name="data"  className={styles.inputFieldShared} {...register("dataNascimento")}/>
                        </div>

                        <p className={styles.erro}>{errors.dataNascimento?.message}</p>
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