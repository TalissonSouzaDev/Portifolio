import React from 'react'
import foto1 from '../../assets/Slide/foto01.jpg'
import foto2 from '../../assets/Slide/foto02.jpg'
import foto3 from '../../assets/Slide/foto03.jpg'
import foto4 from '../../assets/Slide/foto04.jpg'
export default function Slide() {
  return (
    <>
    
    
   <h1 className='title'>Projetos</h1>
    <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    <li data-target="#demo" data-slide-to="3"></li>
  </ul>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={foto1} alt="Los Angeles" className="imgslide"/>
      <div class="carousel-caption">
        <h3>Los Angeles</h3>
        <p>We had such a great time in LA!</p>
      </div>   
    </div>

    <div class="carousel-item">
      <img src={foto2} alt="Chicago" className="imgslide" />
      <div class="carousel-caption">
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div>   
    </div>

    <div class="carousel-item">
      <img src={foto3} alt="New York" className="imgslide"/>
      <div class="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>   
    </div>

    
    <div class="carousel-item">
      <img src={foto4} alt="New York"className="imgslide"/>
      <div class="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>   
    </div>

    </div>

  
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>





  </div>

  <a href="/projetos"  className="btn btn-black "><span className='text-muted'>Ver Mais</span></a>
    </>
  )
}
