import React from 'react'
import { NavLink } from 'react-router-dom';
import Profile from '../../img/faruk_.png';
import './test.css';
import Zoom from 'react-reveal/Zoom';
import resume from '../../data/faruk_ahmad_resume.pdf';


const Test = () => {

    return (
        <div className='container'>
            <Zoom top cascade><h1 className='text-center m-5'>ABOUT</h1></Zoom>
            <div className='row min-vh-100 align-items-center align-content-center'>
                <div className=' col-sm-12 col-md-5 rounded float-start bg-success px-3'>
                    <img className='' src={Profile} alt=''/>
                </div>
                <Zoom right cascade>
                    <div className='col-sm-12 col-md-6 mx-2'>
                    <p>Hello! I'm Faruk Ahmed, a passionate Web Developer. I develop web applications, My core skill is based on JavaScript and I love to do most of the things using Javascript library React. I love to make the web more open to the world. I have graduated with a bachelor's degree in  I am available for any kind of job opportunity that suits my interests.</p>
                    <a className="btn btn-success px-5 p-3 fs-5" target="_blank" href={resume} rel="noopener noreferrer" download>Get Resume</a>
                    <NavLink className="btn px-5 p-3 fs-5 mx-3 text-white border border-success" to="/skill">Skill</NavLink>
                </div>
                </Zoom>

            </div>
        </div>
    )
}

export default Test
