import React from 'react'
import { Link } from 'react-router-dom'
import borrar from '../../assets/borrrar.png'
import editar from '../../assets/editar.png'

export default function TableClientes({ data, handleDelete }) {
  return (
    <>
      {
        data ?
          <table>
            <thead>
              <tr>
                <th className='heading2-regular'>Nombre</th>
                <th className='heading2-regular'>Apellido</th>
                <th className='heading2-regular'>Documento</th>
                <th className='heading2-regular'>Actualizar</th>
                <th className='heading2-regular'>Borrar</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(el => {
                  return (
                    <tr>
                      <td className='body-regular'>{el.nombre}</td>
                      <td className='body-regular'>{el.apellido}</td>
                      <td className='body-regular'>{el.documento}</td>
                      <td>
                        <Link to={`/actualizar/cliente/${el.documento}`} state={el}>
                          <img src={editar} style={{ width: "32px", height: "32px" }} alt="editar" />
                        </Link>
                      </td>
                      <td>
                        <button onClick={(e) => handleDelete(e, el.documento)}>
                          <img src={borrar} style={{ width: "32px", height: "32px" }} alt="borrar" />
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          :
          <></>
      }
    </>
  )
}
