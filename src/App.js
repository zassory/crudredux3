import React from 'react'
import { Header , Productos , NuevoProducto , EditarProducto } from './components';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
          <div className="container mt-5">
            <Routes>
              <Route path="/" element={<Productos />} />
              <Route path="/productos/nuevo" element={<NuevoProducto />} />
              <Route path="/productos/editar/:id" element={<EditarProducto />} />
            </Routes>
          </div>
      </Provider>
    </Router>
  );
}

export default App;
