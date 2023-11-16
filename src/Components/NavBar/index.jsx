import React from "react";
import {FaFortAwesomeAlt} from 'react-icons/fa'
import { FaLinkedin, FaGithub, FaWhatsapp, } from "react-icons/fa";

export default function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
        <a class="navbar-brand" href="#">
         <FaFortAwesomeAlt size={25}/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/Portifolio">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#sobre-me">
                Sobre Me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projeto">
                Projetos
              </a>
            </li>


            <li class="nav-item">
              <a class="nav-link" href="https://linkedin.com/in/talisson-souza-81a069215/" target="_blank">
                <FaLinkedin/>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link"href="https://github.com/TalissonSouzaDev" target="_blank">
                <FaGithub/>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="https://wa.me/5571987337969?text=Talisso+Souza" target="_blank">
                <FaWhatsapp/>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
