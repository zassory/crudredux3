import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

//Actions de redux
import { crearNuevoProductoAction } from '../actions/productoActions';

export const NuevoProducto = () => {

  // utilizar useDispatch y te crea una funcion
  const dispatch = useDispatch();

  // mandar llamar el action de productoAction
  const agregarProducto = () => dispatch( crearNuevoProductoAction() );

  //Cuando el usuario haga submit
  const submitNuevoProducto = e => {
    e.preventDefault();

    //Validar formulario
    
    //Si no hay errores

    //Crear el nuevo producto
    agregarProducto();
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className='text-center mb-4 font-weight-bold'>Agregar Nuevo Producto</h2>

            <form
              onSubmit={submitNuevoProducto}
            >
              <div className="form-group">
                <label htmlFor="nombre-producto">Nombre Producto</label>
                <input
                  id="nombre-producto"
                  type="text" 
                  className='form-control'
                  placeholder='Nombre Producto'
                  name="nombre"
                  />
              </div>
              <div className="form-group">
                <label htmlFor="precio-producto">Precio Producto</label>
                <input 
                  id="precio-producto"
                  type="number" 
                  className='form-control'
                  placeholder="precio"
                  />
              </div>

              <button
                type="submit"
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Agregar
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
