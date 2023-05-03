import React from 'react'
import {Link} from 'react-router-dom'
import logo from './Logo-branco.png'

const Menu = () => {
    return (
        <nav>
            <div style={{backgroundColor: 'blue'}}>
                <Link>
                    <img src={logo}/>
                </Link>
            </div>
        </nav>
    )
}

export default Menu
