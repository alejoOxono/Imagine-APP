import React, { useEffect, useState } from 'react'
import deleteRecord from '../../proxies/deleteRecord'
import readRecords from '../../proxies/readRecords'
import TableClientes from '../Table/TableClientes'

export default function ReadClientes({ insertRecord }) {

  const [data, setData] = useState()

  const handleDelete = (e, id) => {
    e.preventDefault();
    deleteRecord('Clientes', id);
    alert('Se ha borrado un cliente');
    window.location.reload();
  }

  useEffect(() => {
    readRecords(setData, 'Clientes')
  }, [insertRecord])

  return (
    <div style={{ display: "flex", alignContent: "center", width: "100%" }}>
      <TableClientes data={data} handleDelete={handleDelete} />
    </div>
  )
}

