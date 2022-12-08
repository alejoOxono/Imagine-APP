import React, { useState } from 'react'
import InfoBar from '../InfoBar/InfoBar';
import FormClientes from './FormClientes';
import { useLocation, useNavigate } from 'react-router-dom';
import updateRecord from '../../proxies/updateRecord';

export default function UpdateClientes() {

  const data = useLocation().state;
  const navigate = useNavigate()
  const [record, setRecord] = useState({
    documento: data.documento,
    nombre: data.nombre,
    apellido: data.apellido
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.documento)
    updateRecord(record, 'Clientes', data.documento);
    if (!record?.nombre || !record?.documento || !record?.apellido) {
      alert('Por favor ingrese todos los datos');
    } else {
      alert('Se ha actualizado un cliente');
      navigate('/clientes');
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
      <InfoBar data={'Ingrese los nuevos datos para el cliente actual'} />
      <div className='content-landpage'>
        <h1 className='heading1-bold grises-1000'>IActualizar Datos Del Cliente</h1>
        <FormClientes handleForm={handleForm} handleSubmit={handleSubmit} data={data}/>
      </div>
    </div>
  )
}
