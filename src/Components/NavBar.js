import React from 'react'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/create-activity">New Activity</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.hoka.com" target='blank'>Gear</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.nike.com/running/marathon-training-plan" target="blank">Plans</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href='https://www.racefinderusa.com/events' target='blank'>Races</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar
