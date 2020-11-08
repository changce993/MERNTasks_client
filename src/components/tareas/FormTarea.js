import React, {useContext, useState, useEffect} from 'react'
import add from '../../images/icons/more.svg'
import edit from '../../images/icons/edit.svg'
import proyectoContext from '../../context/proyecto/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const FormTarea = () => {

    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext

    const tareasContext = useContext(tareaContext);
    const {tareaSeleccionada, agregarTarea, errorTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea} = tareasContext;
    
    useEffect(() => {
        if(tareaSeleccionada !== null){
            setTarea(tareaSeleccionada)
        } else {
            setTarea({
                nombre: ''
            })
        }
    }, [tareaSeleccionada])

    const [tarea, setTarea] = useState({
        nombre:''
    })

    const {nombre} = tarea;

    if(!proyecto) return null

    const [proyectoActual] = proyecto;

    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        if(nombre.trim() === ''){
            validarTarea();
            return
        }

        if(tareaSeleccionada === null){
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea)
        } else {
            actualizarTarea(tarea)
            limpiarTarea()
        }

        

        obtenerTareas(proyectoActual.id)

        setTarea({
            nombre: ''
        })
    }

    return (
        <>
        <form onSubmit={onSubmit} className="form_tarea">
                <h2>Agrega una tarea</h2>
            <div className="input_container flex">
                <input
                    type="text"
                    placeholder="Nombre tarea"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                />

                <button
                    type="text"
                    placeholder="Nombre tarea"
                    name="name"
                    className="icon add"
                >
                    <img src={tareaSeleccionada ? edit : add } alt="agregar" />
                </button>
            </div>
        </form>
        {errorTarea ? <p className='nota'>El nombre es obligatorio</p> : null}
        </>
    )
}

export default FormTarea
