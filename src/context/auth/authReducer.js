import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types'

export default (state, action) => {
    switch(action.type){
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                autenticado: true,
                cargando: false,
                mensaje: null
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                cargando: false,
                usuario: action.payload
            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            return {
                ...state,
                token:null,
                cargando: false,
                autenticado: null,
                usuario: null,
                mensaje: action.payload
            }
        default :
        return state
    }
}