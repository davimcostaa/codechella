import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from './Logo-branco.png'
import styles from './Menu.module.css'

const Menu = () => {

    const [menuAberto, setMenuAberto] = useState(false);

    const handleMenuClick = () => {
      setMenuAberto(!menuAberto);
    };

    return (
        <nav className={`${styles.menu} ${menuAberto ? styles.menuAberto : ''}`}>
        <div>
          <Link to={'/'}>
            <img src={logo} alt='Logo do CodeChella' className={styles.logo} />
          </Link>
        </div>
  
        <div className={`${styles.links} ${menuAberto ? styles.linksAberto : ''}`}>
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
  
        <div className={styles.hamburguer} onClick={handleMenuClick}>
            <div className={styles.barra} />
            <div className={styles.barra} />
            <div className={styles.barra} />
        </div>
      </nav>
    )
}

export default Menu
