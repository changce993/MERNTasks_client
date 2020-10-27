import React, {useReducer} from 'react';

import { v4 as uuidv4 } from 'uuid';

import TareaReducer from './tareaReducer'
import TareaContext from './tareaContext'

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types'

const TareaState = ({children}) => {
    const initialState = {
        tareas : [
            {id:1, proyectoId:1 ,nombre: 'Definir branding', estado: true},
            {id:2, proyectoId:2 ,nombre: 'Comprar dominio y hosting', estado: true},
            {id:3, proyectoId:3 ,nombre: 'Desarrollar el backend', estado: true},
            {id:4, proyectoId:4 ,nombre: 'Diseñar la UI', estado: true},
            {id:5, proyectoId:1 ,nombre: 'Codear el frontend', estado: false},
            {id:6, proyectoId:2 ,nombre: 'Hacer deploy', estado: false},
            {id:7, proyectoId:3 ,nombre: 'Codear el frontend', estado: false},
            {id:8, proyectoId:1 ,nombre: 'Definir branding', estado: true},
            {id:9, proyectoId:2 ,nombre: 'Comprar dominio y hosting', estado: true},
            {id:10, proyectoId:3 ,nombre: 'Desarrollar el backend', estado: true},
            {id:11, proyectoId:4 ,nombre: 'Diseñar la UI', estado: true},
            {id:12, proyectoId:1 ,nombre: 'Codear el frontend', estado: false},
            {id:13, proyectoId:2 ,nombre: 'Hacer deploy', estado: false}
        ],
        tareasProyecto: null,
        errorTarea: false,
        tareaSeleccionada: null
    }

    const [state, dispatch] = useReducer(TareaReducer, initialState);

    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    const agregarTarea = tarea => {
        tarea.id = uuidv4()

        dispatch({
            type:AGREGAR_TAREA,
            payload: tarea
        })
    }

    const validarTarea = () => {
        dispatch({
            type:VALIDAR_TAREA
        })
    }

    const eliminarTarea = id => {
        dispatch({
            type:ELIMINAR_TAREA,
            payload: id
        })
    }

    const modificarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    const seleccionarTarea = tarea => {
        dispatch({
            type:TAREA_ACTUAL,
            payload: tarea
        })
    }

    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    const limpiarTarea = () => {
        dispatch({
            type:LIMPIAR_TAREA
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto, 
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                modificarEstadoTarea,
                seleccionarTarea,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {children}
        </TareaContext.Provider>
    )
}

export default TareaState