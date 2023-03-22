import React from 'react'

import { Link } from 'react-router-dom';

export const EditarProducto = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className='text-center mb-4 font-weight-bold'>Editar Producto</h2>

            <form>
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
