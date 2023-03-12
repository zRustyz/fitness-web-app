import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDumbbell } from '@fortawesome/free-solid-svg-icons'

export function Header(props){

  return (
      <header className="bg-dark text-light py-3">
          <div className="container">
              <h1 className="mb-0">Fitness Style</h1>
          </div>
      </header>
  )
}