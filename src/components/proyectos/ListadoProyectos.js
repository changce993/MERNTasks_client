import React, {useContext, useEffect } from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyecto/proyectoContext' 
import alertaContext from '../../context/alertas/AlertaContext'

const ListadoProyectos = () => {

    const { mensaje, proyectos, obtenerProyectos } = useContext(proyectoContext)
    const { alerta, mostrarAlerta } = useContext(alertaContext)

    useEffect(() => {

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }

        obtenerProyectos()
        //eslint-disable-next-line
    }, [mensaje]) 
    
    if(proyectos.length === 0) return <p className='mensaje'>No hay proyectos, comienza creando uno</p>

    return (
        <ul className="flex">
        {alerta ? (<div className={`alerta ${alerta.categoria }`}>{alerta.msg}</div>) : null}
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto._id}
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
