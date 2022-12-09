import React from 'react'

export default function TableProductos({ data, precio, handleSubmit, deleteProducto }) {

  return (
    <>
      {
        data ?
          <>
            <table>

              <tbody>
                {
                  data.map(el => {
                    return (
                      <tr>
                        <td className='body-regular'>{el.nombre}</td>
                        <td className='body-regular'>{el.precio} $</td>
                        <td className='body-regular'>{el.iva} %</td>
                        <td>
                          <button className='body-bold secundary-color-text-500'
                          onClick={(e)=>deleteProducto(e, el)}>
                            X
                          </button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            <div style={{display:"flex", flexDirection:"column"}}>
                <h2 className='heading2-bold' style={{alignSelf:"flex-end", margin:"16px 56px 0 0"}}>Total</h2>
                <h2 className='heading2-regular'  style={{alignSelf:"flex-end", margin:"0px 56px 0 0"}}>{precio}</h2>
                <button className="button1" style={{alignSelf:"flex-end", margin:"16px 50px 0 0"}} onClick={(e) => handleSubmit(e, data)}>Enviar</button>
            </div>
          </>
          :
          <></>
      }
    </>
  )
}
