import React from "react";

export default function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="home">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sobre-me">
              Sobre Me
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
