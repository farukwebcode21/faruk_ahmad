import React from 'react'
import { NavLink } from 'react-router-dom';
import Profile from '../../img/faruk_.png';
import './test.css';
const Test = () => {
    return (
        <div className='container'>
            <h1 className='text-center m-5'>ABOUT</h1>
            <div className='row min-vh-100 align-items-center align-content-center'>
                <div className='col-md-5 rounded float-start bg-success px-3'>
                    <img className='' src={Profile} alt=''/>
                </div>
                <div className='col-md-6 mx-3'>
                    <p>Hello! I'm Faruk Ahmed, a passionate software engineer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I have graduated with a bachelor's degree in Computer Science Engineering from Chandigarh University at Punjab, India in 2020. I am available for any kind of job opportunity that suits my interests.</p>
                    <a className="btn btn-success px-5 p-3 fs-5" target="_blank" href="./data/faruk_ahmad.pdf" rel="noopener noreferrer" download>Get Resume</a>
                    <NavLink className="btn px-5 p-3 fs-5 mx-3 text-white border border-success" to="/skill">Skill</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Test
