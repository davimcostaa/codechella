import classNames from 'classnames';
import { TemaContext } from 'common/context/Tema';
import Menu from 'components/Menu'
import Rodape from 'components/Rodape';
import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.css'

const PaginaPadrao = () => {

    const { temaBoreal } = useContext(TemaContext);

  return (
    <>
        <Menu />
        <section className={classNames({
            [styles.conteudo]: true,
            [styles.conteudoBoreal]: temaBoreal === true
        })}>
            <Outlet />
            <Rodape />
        </section>
    </>
  )
}

export default PaginaPadrao