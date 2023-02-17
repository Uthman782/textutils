import React from 'react'
// import { a } from 'react-router-dom';
export default function Navbar(props) {

  return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode === 'dark'?'light':'dark'} bg-${props.mode ==='dark'?'light':'dark'} `}>
    <a className="navbar-brand" href="/"><img className='myLogImg' src="https://yt3.googleusercontent.com/l2IF9FZ2jH13IcDgMRBwLsVMYZSHSGPW0qY2_xrTT8XOIzNmYkRN627LtEx1gh4HKFCXlNFgUAE=s88-c-k-c0x00ffffff-no-rj" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        {/* <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="/">Home</a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-a" href="/About">About</a>
        </li> */}
        {/* <li className="nav-item dropdown">
          <a className="nav-a dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            a
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
      <div className="form-check form-switch text-light">
        <input type="checkbox" className='form-check-input m-1 p-3' style={ props.switchBg} onClick={props.enableMode} />
      </div>
    </div>
</nav>
  )
}