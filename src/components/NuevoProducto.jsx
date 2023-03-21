import React , { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Actions de redux
import { crearNuevoProductoAction } from '../actions/productoActions';

export const NuevoProducto = () => {

  // state del componente
  const [nombre,guardarNombre] = useState('');
  const [precio,guardarPrecio] = useState(0);

  // utilizar useDispatch y te crea una funcion
  const dispatch = useDispatch();

  // mandar llamar el action de productoAction
  const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) );

  //Cuando el usuario haga submit
  const submitNuevoProducto = e => {
    e.preventDefault();

    //Validar formulario
    if(nombre.trim() === '' || precio <= 0){
      return;
    }
    
    //Si no hay errores

    //Crear el nuevo producto
    agregarProducto({
      nombre,
      precio,
    });
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
                  value={nombre}
                  onChange={ e => guardarNombre(e.target.value) }
                  />
              </div>
              <div className="form-group">
                <label htmlFor="precio-producto">Precio Producto</label>
                <input 
                  id="precio-producto"
                  type="number" 
                  className='form-control'
                  placeholder="precio"
                  value={precio}
                  onChange={e => guardarPrecio(Number(e.target.value))}
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
