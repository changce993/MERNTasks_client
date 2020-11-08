import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AlertaContext from '../../context/alertas/AlertaContext'
import AuthContext from '../../context/auth/authContext'

const NuevaCuenta = (props) => {

    const { alerta, mostrarAlerta } = useContext(AlertaContext)
    
    const { autenticado, mensaje, registrarUsuario } = useContext(AuthContext)

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
        nombre: '',
        email: '',
        password: '',
        confirm: ''
    })
    
    const { nombre, email, password, confirm } = user;

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if( nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === '' ){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
            return
        }

        if(password < 6){
            mostrarAlerta('La contraseña debe tener al menos 6 caracteres', 'alerta-error')
            return
        }

        if(password !== confirm){
            mostrarAlerta('Las contraseñas no coinciden', 'alerta-error')
            return
        }

        registrarUsuario({
            nombre,
            email,
            password
        })
    }

    return (
        <form
            className="container flex form_usuario"
            onSubmit={handleSubmit}
        >
            {alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ) : null}

            <h1 className="logo">MERN<span>Tasks</span></h1>

            <div className="form_usuario_container">
                <h1>Crear cuenta</h1>

                <div className="input_form_usuario">
                    <input 
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

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
                    <input
                        type="password"
                        placeholder="Repite tu contraseña"
                        name="confirm"    
                        value={confirm}
                        onChange={handleChange}
                    />
                </div>

                <div className="input_form_usuario">
                    <button className="in" type="submit">Crear cuenta</button>
                </div>

                <p>¿Ya tienes cuenta? <Link to="/" className="link">Inicia sessión</Link></p>
            </div>

        </form>
    )
}

export default NuevaCuenta
