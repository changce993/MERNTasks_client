import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AlertaContext from '../../context/alertas/AlertaContext'
import AuthContext from '../../context/auth/authContext'

const Login = (props) => {

    const { alerta, mostrarAlerta } = useContext(AlertaContext)
    
    const { autenticado, mensaje, iniciarSesion } = useContext(AuthContext)

    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos')
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
        // eslint-disable-next-line
    }, [autenticado, mensaje])

    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user;

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(email.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
        }

        iniciarSesion({email, password})
    }

    return (
        <form
            className="container flex form_usuario"
            onSubmit={handleSubmit}
        >

            {alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ) : null}
            <h1 className="logo">MERN<span>Tasks</span></h1>

            <div className="form_usuario_container">
                <h1>Login</h1>

                <div className="input_form_usuario">
                    <input 
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>

                <div className="input_form_usuario">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        name="password"    
                        value={password}
                        onChange={handleChange}
                    />
                </div>

                <div className="input_form_usuario">
                    <button className="in" type="submit">Iniciar Sessión</button>
                </div>

                <p>¿No tienes cuenta? <Link to="/nueva-cuenta" className="link">Registrate</Link></p>
            </div>

        </form>
    )
}

export default Login
