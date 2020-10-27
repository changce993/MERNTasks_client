import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NuevaCuenta = () => {

    const [ user, setUser ] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })

    const { name, email, password, confirm } = user;

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
                <h1>Crear cuenta</h1>

                <div className="input_form_usuario">
                    <input required
                        type="text"
                        placeholder="Nombre"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>

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
