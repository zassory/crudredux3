import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
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

// Selecciona y elimina el producto
export function borrarProductoAction(id){
    return async (dispatch) => {
        dispatch(  obtenerProductoEliminar(id) );

        try{
            await clienteAxios.delete(`/productos/${id}`);//api
            dispatch( eliminarProductoExito()  );

            // Si se elimina, mostrar alerta
            Swal.fire(
                'Eliminado correctamente!',
                'El producto se eliminó correctamente.',
                'success'
            )
        }catch(error){
            console.log(error);
            dispatch(eliminarProductoError() );
        }
    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
});

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
});

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
});

// Colocar el producto en edición
export function obtenerProductoEditar(producto){
    return async(dispatch) => {
        console.log('Desde el obtenerProductoAction');
        dispatch(  obtenerProductoEditarAction(producto) );
    }
}

const obtenerProductoEditarAction = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})