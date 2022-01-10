import React from 'react'
import { Zoom } from 'react-reveal'
import { Link } from 'react-router-dom'
import './header.css'
import resume from '../../data/faruk_ahmad_resume.pdf';
const Header = () => {
    return (
        <div className='container'>
            <div className='row min-vh-100 align-items-center align-content-center'>
                <Zoom top cascade>
                    <div className='col-sm-12 col-lg-12 col-md-12'>
                    <h3 className="mb-3 text-info">Hello I'm</h3>
                    <Zoom right cascade><h1 className="text-uppercase name">faruk ahmad</h1></Zoom>
                    <Zoom left cascade><h2 className="mb-4 text-warning">Front End Developer (MERN STACK )</h2></Zoom>
                    <a className="btn btn-success px-5 p-3 fs-5" target="blank" href={resume} rel="noopener noreferrer" download>Get Resume</a>
                    <Link className="btn px-5 p-3 fs-5 mx-3 text-white border border-success" to="/about">About</Link>
                </div>
                </Zoom>
            </div>
        </div>
    )
}

export default Header
