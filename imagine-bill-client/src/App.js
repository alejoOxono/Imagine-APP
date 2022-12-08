import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Clientes from './components/Clientes/Clientes';
import UpdateClientes from './components/Clientes/UpdateClientes';
import Facturas from './components/Facturas/Facturas';
import LandPage from './components/LandPage/LandPage';
import Menu from './components/Menu/Menu';
import Nav from './components/Nav/Nav';
import Productos from './components/Productos/Productos';
import UpdateProductos from './components/Productos/UpdateProductos';

function App() {
  return (
    <>
      <Nav />
      <div className='content-all'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Menu />
                <LandPage />
              </>
            }
          />
          <Route
            path='/clientes'
            element={
              <>
                <Menu data={'clientes'} />
                <Clientes />
              </>
            }
          />
          <Route
            path='/productos'
            element={
              <>
                <Menu data={'productos'} />
                <Productos />
              </>
            }
          />
          <Route
            path='/facturas'
            element={
              <>
                <Menu data={'facturas'} />
                <Facturas />
              </>
            }
          />
          <Route
            path='/actualizar/cliente/:documento'
            element={
              <>
                <Menu />
                <UpdateClientes />
              </>
            }
          />
          <Route
            path='/actualizar/producto/:id'
            element={
              <>
                <Menu />
                <UpdateProductos />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
