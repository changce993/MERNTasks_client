import React from 'react'
import logout from '../../images/icons/log-out.svg'

const Barra = () => {
    return (
        <header className="flex header">
            <p className="nombre_usuario">Hola <span>Ricardo</span></p>

            <nav>
                <a href="#!"><img src={logout} alt="icon svg log-out" /></a>
            </nav>
            
        </header>
    )
}

export default Barra
