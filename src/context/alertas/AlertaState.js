import React, { useReducer } from 'react';
import AlertaReducer from './AlertaReducer';
import AlertaContext from './AlertaContext';
import {MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../../types';

const AlertaState = ({ children }) => {

    const initialState = {
        alerta: null
    }

    const [state, dispatch] = useReducer(AlertaReducer, initialState);

    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        });

        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 5000)
    }

    return (
        <AlertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {children}
        </AlertaContext.Provider>
    )
}

export default AlertaState;