import React, { useEffect, useState } from 'react'
import deleteRecord from '../../proxies/deleteRecord'
import readRecords from '../../proxies/readRecords'
import TableProductos from '../Table/TableProductos'

export default function ReadProductos({ insertRecord }) {

  const [data, setData] = useState()

  const handleDelete = (e, id) => {
    e.preventDefault();
    deleteRecord('Productos', id);
    alert('Se ha borrado un producto');
    window.location.reload();
  }

  useEffect(() => {
    readRecords(setData, 'Productos')
  }, [insertRecord])

  return (
    <div style={{ display: "flex", alignContent: "center", width: "100%" }}>
      <TableProductos data={data} handleDelete={handleDelete} />
    </div>
  )
}

