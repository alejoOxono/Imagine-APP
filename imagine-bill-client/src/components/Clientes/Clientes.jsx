import React, { useState } from 'react'
import insertRecord from '../../proxies/insertRecord'
import InfoBar from '../InfoBar/InfoBar'
import FormClientes from './FormClientes'
import ReadClientes from './ReadClientes'

export default function Clientes() {

  const [record, setRecord] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    insertRecord(record, 'Clientes');
    if (!record?.nombre || !record?.documento || !record?.apellido) {
      alert('Por favor ingrese todos los datos');
    } else {
      alert('Se ha Ingresado un cliente nuevo');
      window.location.reload();
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
      <InfoBar data={'Ingrese Información de un nuevo cliente'} />
      <div className='content-landpage'>
        <h1 className='heading1-bold grises-1000'>Ingresar Nuevo Cliente</h1>
        <FormClientes handleForm={handleForm} handleSubmit={handleSubmit} />
        <ReadClientes insertRecord={insertRecord} />
      </div>
    </div>
  )
}
