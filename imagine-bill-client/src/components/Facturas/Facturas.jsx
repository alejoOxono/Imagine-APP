import React, { useEffect, useState } from 'react'
import insertRecord from '../../proxies/insertRecord'
import readRecords from '../../proxies/readRecords'
import InfoBar from '../InfoBar/InfoBar'
import FormClientesFactura from './FormClientesFactura'
import ProductosFactura from './ProductosFactura'

export default function Facturas() {
  const [dataClientes, setDataClientes] = useState([])
  const [dataProductos, setDataProductos] = useState([])
  const [cliente, setCliente] = useState()
  const [listaProductos, setListaProductos] = useState([])
  const [precio, setPrecio] = useState(0)
  const [formCliente, setFormCliente] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    let record = {
      'documento': cliente[0]?.documento || formCliente.documento,
      'nombre': cliente[0]?.nombre || formCliente.nombre,
      'apellido': cliente[0]?.apellido || formCliente.apellido,
      'productos': listaProductos,
      'total': precio
    }
    insertRecord(record, 'Facturas');
    if (!record?.nombre || !record?.documento || !record?.apellido
      || !record?.productos || !record?.total) {
      alert('Por favor ingrese todos los datos');
    } else {
      alert(`Se ha Ingresado una factura a nombre de ${record.nombre} ${record.apellido} por valor de ${record.total} $`);
      window.location.reload();
    }
  }

  const handleForm = (e) => {
    e.preventDefault()
    setFormCliente({
      ...formCliente,
      [e.target.name]: e.target.value
    });
  }

  const searchByDocumento = (e) => {
    e.preventDefault()
    setCliente(dataClientes.filter((cliente) => cliente.documento == e.target.value))
  }

  useEffect(() => {
    readRecords(setDataClientes, 'Clientes')
    readRecords(setDataProductos, 'Productos')
  }, [])

  return (
    <div className='content-dashboard'>
      <InfoBar data={'Ingrese documentación del cliente, agregue productos y proceda a facturar'} />
      <div className='content-landpage'>
        <h1 className='heading1-bold grises-1000'>Facturación</h1>
        <h1 className='heading1-regular grises-1000' style={{ padding: "24px 0 0 0" }}>Información del Cliente</h1>
        <FormClientesFactura
          data={cliente}
          searchByDocumento={searchByDocumento}
          handleForm={handleForm}
        />
        <h1 className='heading1-regular grises-1000' style={{ padding: "24px 0 0 0" }}>Agregar Productos</h1>
        <ProductosFactura
          handleSubmit={handleSubmit}
          dataProductos={dataProductos}
          listaProductos={listaProductos}
          setListaProductos={setListaProductos}
          setPrecio={setPrecio}
          precio={precio}
        />
      </div>
    </div>
  )
}
