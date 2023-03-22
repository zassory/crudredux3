import React , { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';

//actions
import { editarProductoAction } from '../actions/productoActions';

export const EditarProducto = () => {
                   
  const dispatch = useDispatch();

  // nuevo state de producto
  const [producto,guardarProducto] = useState({
    nombre: '',
    precio: 0
  });

  // producto a editar
  const productoEditar = useSelector(state => state.productos.productoEditar);
  
                                                              
  //if(!producto) return null;

  // llenar el state automaticamente
  useEffect( () => {
    guardarProducto(productoEditar);//Lo guardo en el state
  }, [productoEditar] );

  // Leer los datos del formulario
  const onChangeFormulario = e => {
    guardarProducto({
      ...producto,
      [e.target.name] : e.target.value
    });
  }

  const submitEditarProducto = e => {
    e.preventDefault();

    dispatch( editarProductoAction(producto)  );
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className='text-center mb-4 font-weight-bold'>Editar Producto</h2>

            <form
              onSubmit={submitEditarProducto}
            >
              <div className="form-group">
                <label htmlFor="nombre-producto">Nombre Producto</label>
                <input
                  id="nombre-producto"
                  type="text"
                  className='form-control'
                  placeholder='Nombre Producto'
                  name="nombre"
                  value={producto.nombre}
                  onChange={onChangeFormulario}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="precio-producto">Precio Producto</label>
                <input 
                  id="precio-producto"
                  type="number" 
                  className='form-control'
                  placeholder="precio"
                  name="precio"
                  value={producto.precio}
                  onChange={onChangeFormulario}
                  />
              </div>

              <button
                type="submit"
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Guardar Cambios
              </button>
              <Link to={'/'} className="btn btn-info font-weight-bold text-uppercase d-block w-100 mt-2">
                Volver
              </Link>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
