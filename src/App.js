import React from 'react'
import { Header , Productos , NuevoProducto , EditarProducto } from './components';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />

      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/productos/nuevo" element={<NuevoProducto />} />
          <Route path="/productos/editar/:id" element={<EditarProducto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
