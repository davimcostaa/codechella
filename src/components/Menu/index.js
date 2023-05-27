import React from 'react'
import {Link} from 'react-router-dom'
import logo from './Logo-branco.png'
import styles from './Menu.module.css'

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <div>
                <Link to={'/'}>
                    <img src={logo} alt='Logo do CodeChella' className={styles.logo}/>
                </Link>
            </div>

            <div className={styles.links}>
                <Link to={'/experiencia'} className={styles.link}>
                    A experiência
                </Link>

                <Link to={'/mapa'} className={styles.link}>
                    Mapa de Setores
                </Link>

                <Link to={'/comprar-ingresso'} className={styles.link}>
                    Ingresso
                </Link>
            </div>
        </nav>
    )
}

export default Menu
