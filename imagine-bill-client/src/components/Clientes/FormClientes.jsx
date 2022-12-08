import React from 'react'
import './formclientes.css'

export default function FormClientes({ handleForm, handleSubmit, data }) {
  return (
    <form onChange={(e) => handleForm(e)}>

      <div className="heading2-regular grises-1000 div-form-clientes">
        <label htmlFor="nombre">Nombre: </label>
        <input type="text" name="nombre" defaultValue={data?.nombre} />
      </div>

      <div className="heading2-regular grises-1000 div-form-clientes">
        <label htmlFor="apellido">Apellido: </label>
        <input type="text" name="apellido" defaultValue={data?.apellido}  />
      </div>

      <div className="heading2-regular grises-1000 div-form-clientes">
        <label htmlFor="documento" >Identificación: </label>
        <input type="number" min="0" name="documento" defaultValue={data?.documento}  />
      </div>

      <div className="div-form-clientes">
        <button className="button1" type='submit' onClick={(e) => handleSubmit(e)}>Enviar</button>
      </div>
    </form>
  )
}
