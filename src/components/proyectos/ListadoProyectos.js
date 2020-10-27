import React, {useContext, useEffect } from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyecto/proyectoContext' 

const ListadoProyectos = () => {

    const proyectosContext = useContext(proyectoContext)
    const { proyectos, obtenerProyectos } = proyectosContext

    useEffect(() => {
        obtenerProyectos()
        //eslint-disable-next-line
    }, []) 
    
    if(proyectos.length === 0) return <p className='mensaje'>No hay proyectos, comienza creando uno</p>

    return (
        <ul className="flex">
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto.id}
                        timeout={200}
                        classNames='proyecto'
                    >
                        <Proyecto proyecto={proyecto} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    )
}

export default ListadoProyectos
