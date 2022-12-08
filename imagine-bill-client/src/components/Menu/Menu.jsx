import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

export default function Menu({ data }) {
	return (
		<div className='container-menu primary-color-background-200'>
			<Link className={data === 'clientes' ? 'button2-clicked' : 'button2'} to={`/clientes`}>
				<div>Clientes</div>
			</Link>
			<Link className={data === 'productos' ? 'button2-clicked' : 'button2'} to={`/productos`}>
				<div>Productos</div>
			</Link>
			<Link className={data === 'facturas' ? 'button2-clicked' : 'button2'} to={`/facturas`}>
				<div>Facturas</div>
			</Link>
		</div>
	)
}
