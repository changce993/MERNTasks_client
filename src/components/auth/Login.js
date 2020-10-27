import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

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

        console.log( email )
        console.log(password)
    }

    return (
        <form
            className="container flex form_usuario"
            onSubmit={handleSubmit}
        >
            <h1 className="logo">MERN<span>Tasks</span></h1>

            <div className="form_usuario_container">
                <h1>Login</h1>

                <div className="input_form_usuario">
                    <input required
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
