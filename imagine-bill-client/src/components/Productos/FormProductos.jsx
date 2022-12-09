import React from 'react'
import './formproductos.css'

export default function FormProductos({ handleForm, handleSubmit, data }) {
  return (
    <form onChange={(e) => handleForm(e)}>

      <div className="heading2-regular grises-1000 div-form-productos">
        <label htmlFor="nombre">Nombre: </label>
        <input type="text" name="nombre" defaultValue={data?.nombre} />
      </div>

      <div className="heading2-regular grises-1000 div-form-productos">
        <label htmlFor="precio" >Precio: </label>
        <input type="number" min="0" name="precio" defaultValue={data?.precio}  />
      </div>

      <div className="heading2-regular grises-1000 div-form-productos">
        <label htmlFor="iva" >IVA: </label>
        <input type="number" min='0' max='19' name="iva" defaultValue={data?.iva}  />
      </div>

      <div className="div-form-productos">
        <button className="button1" type='submit' onClick={(e) => handleSubmit(e)}>Enviar</button>
      </div>
    </form>
  )
}
