import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import logo from './Logo-branco.png'
import styles from './Menu.module.css'
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { TemaContext } from 'common/context/Tema';


const Menu = () => {

    const [menuAberto, setMenuAberto] = useState(false);
    const {  temaBoreal, setTema  } = useContext(TemaContext);

    const handleMenuClick = () => {
      setMenuAberto(!menuAberto);
    };

    function trocaTema() {
      if (temaBoreal === false) {
        setTema(true)
      } else setTema(false)
    }

    return (
        <nav className={`${styles.menu} ${menuAberto ? styles.menuAberto : ''}  ${temaBoreal ? styles.boreal : ''} `}>
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

          <div onClick={trocaTema} className={styles.divTema}>
            {
              temaBoreal
              ?
              <BsFillSunFill size={25} color={'white'} />
              :
              <BsFillMoonStarsFill size={22} color={'white'} />
            }
          </div>
              
          
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
