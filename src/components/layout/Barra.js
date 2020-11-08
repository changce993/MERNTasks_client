import React, { useContext, useEffect } from 'react'
import logout from '../../images/icons/log-out.svg'
import authContext from '../../context/auth/authContext'

const Barra = () => {

    const { usuario, usuarioAutenticado, cerrarSesion } = useContext(authContext);

    useEffect(() => {
        usuarioAutenticado()
        // eslint-disable-next-line
    }, [])

    return (
        <header className="flex header">
            {usuario ? <p className="nombre_usuario">Hola <span>{usuario.nombre}</span></p> : null}

            <nav>
                <button
                    className='btn-logout'
                    onClick={() => cerrarSesion()}
                >
                    <img src={logout} alt="icon svg log-out" />
                </button>
            </nav>
            
        </header>
    )
}

export default Barra
