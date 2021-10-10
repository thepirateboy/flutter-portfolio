import React from 'react';

function Navbar(){
    return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary shadow fixed-top"
    >
      <div class="container">
        <a class="navbar-brand" href="#">Flutter Collection - Ahmad Rafi Wiratomoko</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home "
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#recent">Recent</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#more">More</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>)
}

export default Navbar;