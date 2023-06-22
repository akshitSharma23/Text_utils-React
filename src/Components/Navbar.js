import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {


  return (
    <div>
    <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.Mode}`} data-bs-theme={props.Mode}>
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.name}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">{props.about}</Link>
        </li>
      </ul>

      <div className="btn-group mx-3" role="group" aria-label="Basic mixed styles example">
        <button type="button" className="btn btn-danger" id="red" onClick={props.color}>Red</button>
        <button type="button" className="btn btn-warning" id="yellow" onClick={props.color}>Yellow</button>
        <button type="button" className="btn btn-success" id="green" onClick={props.color}>Green</button>
      </div>

      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.theme}/>
        <label className={`form-check-label text-${(props.Mode==='dark')?"white":"dark"}`} htmlFor="flexSwitchCheckDefault">Switch To {props.Mode==="dark"?"Light":"Dark"} Mode</label>
      </div>

    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes={
    name:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired
}

Navbar.defaultProps={
    name:"Texturils",
    about:"About"
}
