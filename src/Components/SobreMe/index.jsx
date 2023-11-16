import { useState } from "react";
import React from "react";
import '../../assets/css/style.css'
import {FaReact,FaHtml5,FaCss3Alt,FaPhp,FaJs,FaBootstrap,FaLaravel,FaDocker } from "react-icons/fa";
import csharp from "../../assets/Csharp.svg";
import mysql from "../../assets/mysql.svg";
import postgresql from "../../assets/postgresql.svg";
import sqlserver from "../../assets/sqlserver.svg";
import powerbi from "../../assets/powerbi.svg";

export default function SobreMe() {
  const [formacao, setformcao] = useState([
    { id: 1, name: "Superior em Análise e Desenvolvimento de Sistemas" },
    {
      id: 2,
      name: "Pós Graduando em Business intelligence, big data e analytics - ciência de dados",
    },
    { id: 3, name: "Pós Graduando em  Arquitetura de Soluções" },
  ]);


  const [curso, setcurso] = useState([
    { id: 1, name: "Qualificação Profissional Programador de Sistema - SENAC" },
    {
      id: 2,
      name: "Qualificação Profissional Programador Web - SENAI",
    },
    { id: 3, name: "AWS Descobrindo a Nuvem - DIO" },
  ]);
  return (
    <>
      <div className="me">
        <h1 className=" animate__animated animate__flipInX h1-sobre"><strong>Quem é Talisson Souza ?</strong></h1>

        <h4 className="animate__animated animate__flipInX">
          Sou um desenvolvedor web qualificado, dedicado e produtivo, boa
          adaptação em ambiente de trabalho, curioso para aprender novas
          tecnologias, facilidade de aprendizado, autodidata, colaborativo em
          trabalho de equipe, comunicativo e pró-ativo.
        </h4>

        <h1 className="animate__animated animate__flipInX h1-sobre">FORMAÇÃO</h1>
        <div className="formacao">
          {formacao.map((x) => {
            return (
              <>
                <span key={x.id} className="formacao-quadrado">
                  <strong>{x.name}</strong>
                </span>
              </>
            );
          })}
        </div>
        <br /><br />


        <h1 className="h1-sobre">CURSOS COMPLEMENTARES</h1>
        <div className="formacao">
          {curso.map((x) => {
            return (
              <>
                <span key={x.id} className="formacao-quadrado">
                  <strong>{x.name}</strong>
                </span>
              </>
            );
          })}
        </div>

        <div className="conhecimento">
          <h1>CONHECIMENTOS</h1>

          <div className="conhecimento-icon">
           <span><FaHtml5 size={100} color="black"/><strong>HTML</strong></span>
            <span><FaCss3Alt size={100} color="black"/><strong>CSS 3</strong></span>
            <span><FaPhp size={100} color="black"/><strong>PHP</strong></span>
            <span><FaJs size={100} color="black"/><strong>JAVASCRIPT</strong></span>
            <span><FaReact size={100} color="black"/><strong>REACTJS</strong></span>
            <span><FaBootstrap size={100} color="black"/><strong>BOOTSTRAP</strong></span>
            <span><FaLaravel size={100} color="black"/><strong>LARAVEL</strong></span>
           <span> <FaDocker size={100} color="black"/><strong>DOCKER</strong></span>
           <span> <img src={csharp} alt="c#" srcset="" /><strong>C SHARP</strong></span>
           <span> <img src={mysql} alt="c#" srcset="" /><strong>MYSQL</strong></span>
           <span> <img src={postgresql} alt="c#" srcset="" /><strong>POSTGRESQL</strong></span>
           <span> <img src={sqlserver} alt="c#" srcset="" /><strong>SQL SERVER</strong></span>
           <span> <img src={powerbi} alt="c#" srcset="" /><strong>POWER BI</strong></span>

          </div>
        </div>
      </div>
    </>
  );
}
