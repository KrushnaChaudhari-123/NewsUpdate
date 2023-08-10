import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <div className="mx-3">News Update</div>
          </a>
          <button 
            className="navbar-toggler mr-6"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link " href="/home">
                Home
              </a>
              <a className="nav-item nav-link" href="/about">
                About
              </a>
              <a className="nav-item nav-link " href="/home">
                Business
              </a>
              <a className="nav-item nav-link " href="/home">
                Entertainment
              </a>
              <a className="nav-item nav-link " href="/home">
                General
              </a>
              <a className="nav-item nav-link " href="/home">
                Health
              </a>
              <a className="nav-item nav-link " href="/home">
                Science
              </a>
              <a className="nav-item nav-link " href="/home">
                Sports
              </a>
              <a className="nav-item nav-link " href="/home">
                Technology
              </a>
              
            </div>
          </div>
        </nav>
      </>
    );
  }
}
