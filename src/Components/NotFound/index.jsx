import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
<div className='d-flex flex-column justify-content-center align-items-center p-5'>

  <h1 className='text-danger'>NotFound 404 ☹😢</h1>
  <Link className='btn btn-danger btn-lg' to="/Portifolio">Pagina Principal</Link>
</div>
  )
}
