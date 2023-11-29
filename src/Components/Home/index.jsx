import React from "react";
import '../../assets/css/style.css'
import { FaLinkedin, FaGithub, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import "animate.css";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
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
            <Link to="https://www.linkedin.com/in/talisson-souza-81a069215/" target="_blank">
              <FaLinkedin color="white" size={40} />
            </Link>
            <Link to="https://github.com/TalissonSouzaDev" target="_blank">
              <FaGithub color="white" size={40} />
            </Link>
            <a href="https://wa.me/5571987337969?text=Talisso+Souza" target="_blank">
              <FaWhatsapp color="white" size={40} />
            </a>
          </div>
          <Link to="/Portifolio/projetos" className="btn btn-lg text-dark animate__animated animate__bounceInUp">
            Meus Projetos <FaArrowRight />
          </Link>
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
