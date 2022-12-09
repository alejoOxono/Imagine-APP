import React from 'react'
import './formclientesfactura.css'

export default function FormClientesFactura({ handleForm, data, searchByDocumento }) {

  return (
    <form className='content-form-clientes-factura' onChange={(e) => handleForm(e)}>

      <div className="body-bold grises-1000 div-form-clientes-factura">
        <label htmlFor="documento" >Identificación: </label>
        <input
          type="number" min="0" name="documento"
          onChange={(e) => searchByDocumento(e)}
        />
      </div>

      <div className="body-bold grises-1000 div-form-clientes-factura">
        <label htmlFor="nombre">Nombre: </label>
        <input type="text" name="nombre" defaultValue={data?.[0]?.nombre} />
      </div>

      <div className="body-bold grises-1000 div-form-clientes-factura">
        <label htmlFor="apellido">Apellido: </label>
        <input type="text" name="apellido" defaultValue={data?.[0]?.apellido} />
      </div>

    </form>
  )
}
