import React from "react";
import "../../assets/css/style.css";
import { FaLinkedin, FaGithub, FaWhatsapp, FaReact, FaBootstrap, } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          {" "}
          <Link
            class="nav-link"
            to="https://linkedin.com/in/talisson-souza-81a069215/"
            target="_blank"
          >
            <FaLinkedin color="white" />
          </Link>
        </li>
        <li>
          {" "}
          <Link
            class="nav-link"
            to="https://github.com/TalissonSouzaDev"
            target="_blank"
          >
            <FaGithub color="white" />
          </Link>
        </li>
        <li>
          {" "}
          <Link
            class="nav-link"
            to="https://wa.me/5571987337969?text=Talisso+Souza"
            target="_blank"
          >
            <FaWhatsapp color="white" />
          </Link>
        </li>
      </ul>
      <span>&copy;2023 - Talisson Souza</span>

      <ul className="tec-footer">
        <li>
          <i>Tecnologias Usadas Neste Portifolio</i>
        </li>
        <li>
          <i> <FaReact /> ReactJs + <FaBootstrap /> Bootstrap</i>
        </li>
      </ul>
    </div>
  );
}
