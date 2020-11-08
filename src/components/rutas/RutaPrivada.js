import React, { useContext, useEffect } from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

const RutaPrivada = ({ component : Component, ...props}) => {

    const { autenticado, cargando, usuarioAutenticado } = useContext(AuthContext);

    useEffect(() => {
        usuarioAutenticado()
        // eslint-disable-next-line
    }, [])

    return (
        <Route 
            {...props}
            render={() => !autenticado && !cargando ? <Redirect to='/'/> : <Component {...props} />}
        />
    )
}

export default RutaPrivada
