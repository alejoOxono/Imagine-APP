import React from 'react'
import InfoBar from '../InfoBar/InfoBar'
import './landpage.css'

export default function LandPage() {
  return (
    <div className='content-dashboard'>
      <InfoBar data={'Ingrese clientes, productos y facture'} />
      <div className='content-landpage'>
        <h1 className='heading1-bold grises-1000'>Bienvenido</h1>
        <h2 className='heading1-regular grises-1000'>Aplicativo para el registro de clientes,
          <br />productos y facturación.</h2>
      </div>
    </div>
  )
}
