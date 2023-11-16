import React from "react";
import "../../assets/css/style.css";
import { FaLinkedin, FaGithub, FaWhatsapp, FaReact, FaBootstrap, } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          {" "}
          <a
            class="nav-link"
            href="https://linkedin.com/in/talisson-souza-81a069215/"
            target="_blank"
          >
            <FaLinkedin color="white"/>
          </a>
        </li>
        <li>
          {" "}
          <a
            class="nav-link"
            href="https://github.com/TalissonSouzaDev"
            target="_blank"
          >
            <FaGithub color="white" />
          </a>
        </li>
        <li>
          {" "}
          <a
            class="nav-link"
            href="https://wa.me/5571987337969?text=Talisso+Souza"
            target="_blank"
          >
            <FaWhatsapp color="white" />
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <i>Tecnologias Usadas Neste Portifolio</i>
        </li>
        <li>
          <i> <FaReact /> ReactJs + <FaBootstrap /> Bootstrap</i>
        </li>
        <li>&copy;2023 - Talisson Souza</li>
      </ul>
    </div>
  );
}
