import React from 'react'
import Card from '../Card'
import './pageprojeto.css'
import { FaAngleDoubleLeft } from "react-icons/fa";
export default function PageProjeto() {
  return (
    <>

   <div className='title-card'>
   <h1 className='title'>Projetos</h1>
    <a href="/" className="btn btn-dark btn-lg"><FaAngleDoubleLeft /> Volta Para Home</a>
   </div>
    
    <div className='card-elements'>
     
      <Card/> <Card/> <Card/>  <Card/>  <Card/>  <Card/>
    </div>
    </>
  )
}
