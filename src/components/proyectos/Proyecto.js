import React, {useContext} from 'react'
import proyectoContext from '../../context/proyecto/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const Proyecto = ({ proyecto }) => {

    const proyectosContext = useContext(proyectoContext)
    const { proyectoActual } = proyectosContext

    const tareasContext = useContext(tareaContext)
    const {obtenerTareas} = tareasContext;

    const seleccionarProyecto = id => {
        proyectoActual(id) // fija el proyecto actual
        obtenerTareas(id) // filtrar las tareas del proyecto actual
    }

    return (
        <button 
            className="task"
            onClick={() => seleccionarProyecto(proyecto._id)}
        >
            {proyecto.nombre}
        </button>
    )
}

export default Proyecto
