import React, {useContext} from 'react'
import edit from '../../images/icons/edit.svg'
import trash from '../../images/icons/trash.svg'

import proyectoContext from '../../context/proyecto/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const Tarea = ({tarea}) => {

    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const {eliminarTarea, obtenerTareas, actualizarTarea, seleccionarTarea} = tareasContext

    const [proyectoActual] = proyecto

    const {nombre, estado} = tarea;

    const tareaEliminar = id => {
        eliminarTarea(id, proyectoActual._id)
        obtenerTareas(proyectoActual._id)
    }

    const cambiarEstado = tarea => {
        if(tarea.estado){
            tarea.estado = false;
        } else {
            tarea.estado = true
        }

        actualizarTarea(tarea)
    }

    const seleccionatTareaActual = tarea => {
        seleccionarTarea(tarea)
    }

    return (
        <li className="flex">
            <p>{nombre}</p>

            <div className="flex">
                {
                    estado 
                    ? <button
                        className="completo"
                        onClick={() => cambiarEstado(tarea)}
                    >
                        Completo
                    </button>
                    : <button
                        className="incompleto"
                        onClick={() => cambiarEstado(tarea)}
                    >
                        Incompleto
                    </button>
                }

                <button
                    className="button task_icon edit"
                    onClick={() => seleccionatTareaActual(tarea)}
                >
                    <img src={edit} alt="edit icon" />
                </button>

                <button onClick={() => tareaEliminar(tarea._id)} className="button task_icon trash">
                    <img src={trash} alt="edit icon" />
                </button>
            </div>
        </li>
    )
}

export default Tarea
