import React from 'react'
import { NavLink } from 'react-router-dom'
import './navigation.css'

const Navigation = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm rounded" aria-label="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand fs-1" href="#/">F</a>
                    <button className=" btn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample10">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/home">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/skill">SKILL</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className="nav-link" to="/portfolio">PORTFOLIO</NavLink>
                            </li>
                             <li className='nav-item'>
                                <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
                            </li>
                             <li className='nav-item'>
                                <NavLink className="nav-link" to="/blog">BLOG</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
