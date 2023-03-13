import React from "react";
import { Link } from 'react-router-dom';

export function Header(props) {

  return (
    <header className="text-light bg-dark px-1 d-flex justify-content-between m-3">
      <h1>Fitness Style</h1>
      <nav>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/form">Form</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/about">About</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}
