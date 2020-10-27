import React from 'react'
import Sidebar from '../layout/Sidebar'
import Barra from '../layout/Barra'
import FormTarea from '../tareas/FormTarea'
import ListadoTareas from '../tareas/ListadoTareas'

const Proyectos = () => {
    return (
        <div className="container general_container flex">
            <Sidebar />

            <div className="seccion_principal">
                <Barra />
                <main>
                <FormTarea />
                    <div className="tareas_container">
                        <ListadoTareas />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Proyectos
