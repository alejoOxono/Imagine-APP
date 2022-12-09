import React, { useState } from 'react'
import './productosfactura.css'
import SearchProducto from './SearchProducto'
import TableProductos from './TableProductos'

export default function ProductosFactura(
  { dataProductos, handleSubmit, listaProductos, setListaProductos, setPrecio, precio }) {
  const [contador, setContador] = useState(0)
  const [producto, setProducto] = useState()

  const searchByProducto = (e) => {
    e.preventDefault()
    setProducto(dataProductos.filter((producto) => producto.nombre == e.target.value))
  }

  const addProducto = (e, data) => {
    e.preventDefault()
    setContador(prev => prev + 1)
    listaProductos.push({ ...data, ['producto']: contador })
    setPrecio(prev => prev + (data.precio + data.precio * (data.iva / 100)))
  }

  const deleteProducto = (e, data) => {
    e.preventDefault()
    setListaProductos(listaProductos.filter((producto) => producto.producto !== data.producto))
    setPrecio(prev => prev - (data.precio + data.precio * (data.iva / 100)))
  }

  return (
    <div className='content-productos-factura'>
      <div className='content-search-add-products'>
        <SearchProducto
          data={producto}
          addProducto={addProducto}
          searchByProducto={searchByProducto}
        />
      </div>
      <div className='content-table-products'>
        <TableProductos
          data={listaProductos}
          precio={precio}
          handleSubmit={handleSubmit}
          deleteProducto={deleteProducto}
        />
      </div>
    </div>
  )
}
