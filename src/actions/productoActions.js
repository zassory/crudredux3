import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';
import clienteAxios from '../config/axios';

//Crear nuevos productos
export function crearNuevoProductoAction(producto){
    return async(dispatch) => {
        dispatch(  agregarProducto() );

        try{
            // insertar en la API
            await clienteAxios.post('/hola',producto);//api
            dispatch( agregarProductoExito(producto) );//state
        }catch(error){
            console.log(error);
            dispatch( agregarProductoError(true) );
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});