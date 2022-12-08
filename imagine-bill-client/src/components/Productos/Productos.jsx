import React, { useState } from 'react'
import insertRecord from '../../proxies/insertRecord'
import InfoBar from '../InfoBar/InfoBar'
import FormProductos from './FormProductos'
import ReadProductos from './ReadProductos'

export default function Productos() {

  const [record, setRecord] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    insertRecord(record, 'Productos');
    if(!record?.nombre || !record?.precio){
        alert('Por favor ingrese todos los datos');
    } else {
        alert('Se ha Ingresado un producto nuevo');
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
      <InfoBar data={'Ingrese Información de un nuevo producto'} />
      <div className='content-landpage'>
        <h1 className='heading1-bold grises-1000'>Ingresar Nuevo Producto</h1>
        <FormProductos handleForm={handleForm} handleSubmit={handleSubmit} />
        <ReadProductos insertRecord={insertRecord} />
      </div>
    </div>
  )
}
