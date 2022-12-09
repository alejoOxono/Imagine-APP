import React from 'react'
import './searchproducto.css'
import add from '../../assets/añadir.png'

export default function SearchProducto({ data, searchByProducto, addProducto }) {

  return (
    <div className='content-search-producto'>
      <div className="body-bold grises-1000">
        <label htmlFor="nombre" >Nombre del producto: </label>
        <input type="text" name="nombre" onChange={(e) => searchByProducto(e)} />
      </div>

      <div className="body-regular grises-1000 div-search-producto">
        {data?.[0] ?
            <>
              <p><b>Nombre: </b>{data?.[0]?.nombre}</p>
              <p><b> Precio: </b>{data?.[0]?.precio}$</p>
              <p><b> IVA: </b>{data?.[0]?.iva}%</p>
              <button style={{ width: "100%"}} onClick={(e)=>addProducto(e, data[0])}><img style={{ width: "auto", height: "64px" }} src={add} alt="Añadir" /></button>
            </>
          : <></>}
      </div>
    </div>
  )
}