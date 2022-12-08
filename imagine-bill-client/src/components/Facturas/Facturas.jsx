import React, { useEffect, useState } from 'react'
import insertRecord from '../../proxies/insertRecord'
import readRecords from '../../proxies/readRecords'
import InfoBar from '../InfoBar/InfoBar'
import FormClientesFactura from './FormClientesFactura'
import ProductosFactura from './ProductosFactura'

export default function Facturas() {
  const [dataClientes, setDataClientes] = useState([])
  const [dataProductos, setDataProductos] = useState([])
  const [record, setRecord] = useState()
  const [cliente, setCliente] = useState()
  var valueCliente

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

  const searchByDocumento = (e) => {
    e.preventDefault()
    valueCliente = (dataClientes.filter((cliente) => cliente.documento == e.target.value))
    if (valueCliente) setCliente(valueCliente)
  }

  useEffect(() => {
    readRecords(setDataClientes, 'Clientes')
    readRecords(setDataProductos, 'Clientes')
  }, [setCliente])

  return (
    <div className='content-dashboard'>
      <InfoBar data={'Ingrese documentación del cliente, agregue productos y proceda a facturar'} />
      <div className='content-landpage'>
        <h1 className='heading1-bold grises-1000'>Facturación</h1>
        <h1 className='heading1-regular grises-1000' style={{ padding: "24px 0 0 0" }}>Información del cliente</h1>
        <FormClientesFactura data={cliente}
          handleForm={handleForm} handleSubmit={handleSubmit}
          searchByDocumento={searchByDocumento}
        />
        <h1 className='heading1-regular grises-1000' style={{ padding: "24px 0 0 0" }}>Productos</h1>
        <ProductosFactura />
      </div>
    </div>
  )
}
