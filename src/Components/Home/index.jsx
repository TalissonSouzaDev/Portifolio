import React from "react";
import '../../assets/css/style.css'
import { FaLinkedin, FaGithub, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import "animate.css";
import avatar from "../../assets/avatar.png";
export default function Home() {
  return (
    <>
    <div className="home-elements">
        <div className="text-white title animate__animated animate__bounceInLeft">
          Olá!,{" "}
          <strong>
            Me Chamo <br /> Talisson Souza
          </strong>
          <br />
          <h3>Programador FullStack | Analista de Dados</h3>
          <div className="icon animate__animated animate__bounceInLeft">
            <a href="https://www.linkedin.com/in/talisson-souza-81a069215/" target="_blank">
              <FaLinkedin color="white" size={40} />
            </a>
            <a href="https://github.com/TalissonSouzaDev" target="_blank">
              <FaGithub color="white" size={40} />
            </a>
            <a href="https://wa.me/5571987337969?text=Talisso+Souza" target="_blank">
              <FaWhatsapp color="white" size={40} />
            </a>
          </div>
          <a href="/Portifolio/projetos" className="btn btn-lg text-dark animate__animated animate__bounceInUp">
            Meus Projetos <FaArrowRight />
          </a>
        </div>

        <img
          src={avatar}
          alt="avatar"
          className="animate__animated animate__zoomInRight"
        />


        
      </div>
    </>
  );
}
