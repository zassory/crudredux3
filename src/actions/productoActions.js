import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

//Crear nuevos productos
export function crearNuevoProductoAction(producto){
    return async(dispatch) => {
        dispatch(  agregarProducto() );

        try{
            // insertar en la API
            await clienteAxios.post('/productos',producto);//api
            dispatch( agregarProductoExito(producto) );//state

            //Alerta
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            );
        }catch(error){
            console.log(error);
            dispatch( agregarProductoError(true) );

            // alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intente mas tarde'
            });
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

// Función que descarga los productos de la base de datos
export function obtenerProductosAction() {
    return async(dispatch) => {
        dispatch( descargarProductos() );

        try{
            const respuesta = await clienteAxios.get('/productos');//api
            dispatch(  descargaProductosExitosa(respuesta.data) );//state
        }catch(error){
            console.log(error);
            dispatch(  descargaProductosError() );
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});
const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});
const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
});