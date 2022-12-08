import React, { useState } from 'react'
import InfoBar from '../InfoBar/InfoBar';
import { useLocation, useNavigate } from 'react-router-dom';
import updateRecord from '../../proxies/updateRecord';
import FormProductos from './FormProductos';

export default function UpdateProductos() {

  const data = useLocation().state;
  const navigate = useNavigate()
  const [record, setRecord] = useState({
    id: data.id,
    nombre: data.nombre,
    precio: data.precio
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecord(record, 'Productos', data.id);
    if (!record?.nombre || !record?.precio) {
      alert('Por favor ingrese todos los datos');
    } else {
      alert('Se ha actualizado un producto');
      navigate('/productos');
    }
  }

  const handleForm = (e) => {
    setRecord({
      ...record,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className='content-dashboard'>
      <InfoBar data={'Ingrese los nuevos datos para el producto actual'} />
      <div className='content-landpage'>
        <h1 className='heading1-bold grises-1000'>Actualizar Datos De Un Producto</h1>
        <FormProductos handleForm={handleForm} handleSubmit={handleSubmit} data={data} />
      </div>
    </div>
  )
}
