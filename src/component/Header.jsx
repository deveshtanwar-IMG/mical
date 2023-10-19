import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/logo.png'
import './header.css';
import '../responsive.css'

const Header = () => {
    const location = useLocation();
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={Logo} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {console.log(location.pathname)}
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/"> Home  </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/furniture' ? 'active' : ''}`} to="/furniture">Furnitures</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/testimonial' ? 'active' : ''}`} to="/testimonial">Testimonial</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/contactus' ? 'active' : ''}`} to="/contactus">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="#"><i className="fa fa-user-circle padd_right me-2" aria-hidden="true"></i>Login/Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><i className="fa fa-search" aria-hidden="true"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;