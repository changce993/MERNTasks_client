import React, {useContext} from 'react'

import {CSSTransition, TransitionGroup} from 'react-transition-group'

import Tarea from '../tareas/Tarea'
import proyectoContext from '../../context/proyecto/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const ListadoTareas = () => {

    const proyectosContext = useContext(proyectoContext)
    const { proyecto, eliminarProyecto } = proyectosContext

    const tareasContext = useContext(tareaContext)
    const {tareasProyecto} = tareasContext;

    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    const [proyectoActual] = proyecto;

    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }
    
    return (
        <>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado_tarea">
            {tareasProyecto.length === 0
                ? <p className='nota'>No hay tareas</p>
                :
                <TransitionGroup>
                    { tareasProyecto.map(tarea => {
                        return <CSSTransition timeout={200} classNames='tarea' key={tarea.id}>
                            <Tarea  tarea={tarea}/>
                        </CSSTransition>
                    })}
                </TransitionGroup>
            }
                
            </ul>
            <button onClick={onClickEliminar} className="delete_project">Eliminar proyecto &times;</button>
            
        </>
    )
}

export default ListadoTareas
