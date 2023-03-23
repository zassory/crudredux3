import React , { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//Actions de redux
import { crearNuevoProductoAction } from '../actions/productoActions';
import { mostrarAlertaAction } from '../actions/alertaActions';

export const NuevoProducto = () => {

  // state del componente
  const [nombre,guardarNombre] = useState('');
  const [precio,guardarPrecio] = useState(0);

  let navigate = useNavigate();

  // utilizar useDispatch y te crea una funcion
  const dispatch = useDispatch();

  // Acceder al state del store
  const cargando = useSelector(state => state.productos.loading );
  const error = useSelector(state => state.productos.error);
  const alerta = useSelector(state => state.alerta.alerta);

  // mandar llamar el action de productoAction
  const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) );

  //Cuando el usuario haga submit
  const submitNuevoProducto = e => {
    e.preventDefault();

    //Validar formulario
    if(nombre.trim() === '' || precio <= 0){

      const alerta = {
        msg: 'Ambos campos son obligatorios',
        classes: 'alert alert-danger text-center text-uppercase p3'
      }
      dispatch( mostrarAlertaAction(alerta) );
      return;
    }
    
    //Si no hay errores

    //Crear el nuevo producto
    agregarProducto({
      nombre,
      precio,
    });

    navigate("/");
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className='text-center mb-4 font-weight-bold'>
              Agregar Nuevo Producto
            </h2>

            {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}

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

            { cargando ? <p>Cargando...</p> : null }
            { error ? <p className='alert alert-danger p2 mt-4 text-center'>Hubo un error</p> : null }
          </div>
        </div>
      </div>
    </div>
  )
}
