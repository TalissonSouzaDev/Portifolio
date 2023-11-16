import React from "react";
import '../../assets/css/style.css'
import { FaGithub } from "react-icons/fa";

export default function Card({foto,link}) {
  return (
    <>
      <div class="card" style={{width: '25rem'}}>
        <img class="card-img-top" src={foto} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>


        <div className="btn-card">
        <a href={link} class="btn btn-dark">
        <FaGithub /> Github
          </a>
         
        </div>
        </div>
      </div>
    </>
  );
}
