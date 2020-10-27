import React, { useState, useContext } from 'react'
import proyectoContext from '../../context/proyecto/proyectoContext'

const NuevoProyecto = () => { 
    
    const proyectosContext = useContext(proyectoContext)
    const { formulario, mostrarFormulario, agregarProyecto, errorFormulario, mostrarError } = proyectosContext

    const [ proyecto, setProyecto ] = useState({
        nombre: ''
    })

    const { nombre } = proyecto;

    const handleChange = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(nombre === '') {
            mostrarError()
            return;
        }

        agregarProyecto(proyecto)

        setProyecto({
            nombre: ''
        })
    }

    const handleClick = () => {
        mostrarFormulario()
    }

    return (
        <div>
            <button
                type="button"
                onClick={handleClick}
            >Nueva tarea</button>

            {formulario ? (
                <form
                    className="flex form_task"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Nombre proyecto"
                        onChange={handleChange}
                        name='nombre'
                        value={nombre}
                    />
                    <input type="submit" value="Crear tarea" />
                </form>
            ) : null }
            
            {errorFormulario ? <p className='mensaje error'>El nombre del proyecto es obligatorio</p> : null}
        </div>
    )
}

export default NuevoProyecto
