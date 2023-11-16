import React from 'react'
import { useState } from 'react';
import Card from '../Card'
import '../../assets/css/style.css'
import { FaAngleDoubleLeft } from "react-icons/fa";
import foto1  from '../../assets/Slide/foto01.jpg'
import foto2  from '../../assets/Slide/foto02.jpg'
import foto3  from '../../assets/Slide/foto03.jpg'
import foto4  from '../../assets/Slide/foto04.png'
export default function PageProjeto() {

  const [foto,setfotos] = useState([
    {id:1,fotos:foto1,link:''},
    {id:2,fotos:foto2,link:''},
    {id:3,fotos:foto3,link:''},
    {id:4,fotos:foto4,link:''},
  ]);
  return (
    <>

   <div className='title-card'>
   <h1 className='title'>Projetos</h1>
    <a href="/" className="btn btn-dark btn-lg"><FaAngleDoubleLeft /> Volta Para Home</a>
   </div>
    
    <div className='card-elements'>
     
      {foto.map(e =>{
        return(
          <Card foto={e.fotos} link={e.link}/>
        )
      })}
    </div>
    </>
  )
}
