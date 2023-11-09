import React from 'react'
import "./Home.css"
import { FaLinkedin,FaGithub, FaWhatsapp,FaArrowRight} from "react-icons/fa";
import 'animate.css';
export default function Home() {
  return (
    <div className='Template'>
    <div className='text-white title animate__animated animate__bounceInLeft'>
      Olá!, <strong>Me Chamo Talisson Souza</strong>
      <br />
      <h3>Programador FullStack | Analista de Dados</h3>
    
    
    </div>


    <div className='icon animate__animated animate__bounceInLeft'>
    <a href=""><FaLinkedin color='white' size={40}/></a>
    <a href=""><FaGithub color='white' size={40}/></a>
    <a href=""><FaWhatsapp color='white' size={40}/></a>
    </div>

    <button className="btn btn-lg animate__animated animate__bounceInUp">Meus Projetos <FaArrowRight/></button>
    </div>
  )
}
