import React, {useReducer} from 'react';

import TareaReducer from './tareaReducer'
import TareaContext from './tareaContext'

import clienteAxios from '../../config/axios'

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types'

const TareaState = ({children}) => {
    const initialState = {
        tareasProyecto: [],
        errorTarea: false,
        tareaSeleccionada: null
    }

    const [state, dispatch] = useReducer(TareaReducer, initialState);

    const obtenerTareas = async proyecto  => {
        try {
            const resultado = await clienteAxios.get('/api/tareas', {params : {proyecto} });

            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            })
        } catch (error) {
            console.log(error)
        }
    }

    const agregarTarea = async tarea => { 
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            console.log(resultado)
            dispatch({
                type:AGREGAR_TAREA, 
                payload: tarea
            })
        } catch (error) {
            console.log(error)
        }
    }

    const validarTarea = () => {
        dispatch({
            type:VALIDAR_TAREA
        })
    }

    const eliminarTarea = async (id, proyecto) => {
        await clienteAxios.delete(`/api/tareas/${id}`, { params: {proyecto}})
        
        try {
            dispatch({
                type:ELIMINAR_TAREA,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }

    const actualizarTarea = async tarea => {
        const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea)
        console.log(resultado)

        try {
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data.tarea
            })
        } catch (error) {
            console.log(error)
        }
    }

    const seleccionarTarea = tarea => {
        dispatch({
            type:TAREA_ACTUAL,
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
                tareasProyecto: state.tareasProyecto, 
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
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