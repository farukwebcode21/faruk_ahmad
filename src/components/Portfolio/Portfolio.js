import React from 'react'
import { Zoom } from 'react-reveal';
import firstImage from '../../img/9.png';
import secondImage from '../../img/7.png';
import thiredImage from '../../img/8.png';
import fourImage from '../../img/10.png'
import fiveImage from '../../img/health-shop.png'
import sixImage from '../../img/12.png'

import './portfolio.css';

const Portfolio = () => {

    return (
            <div className='container'>
            <Zoom top cascade><h2 className='text-center text-uppercase m-5'>PortFolio</h2></Zoom>
            <div className="card-group">
            <Zoom bottom cascade>
                <div className="card mx-2 rounded">
                <img src={firstImage} className="card-img-top rounded" height="100%" alt="..." />
                <div className='card-body d-flex'>
                    <h5><a className='px-2 text-white' href="https://fir-login-e47cc.web.app/">Live</a></h5>
                    <h5><a className='p-2 text-white' href="https://github.com/farukwebcode21/travel-agency">Git</a></h5>
                </div>
                <div className="card-footer">
                    <small className="text-white">
                        <span className='mx-1'>React</span>
                        <span className='mx-1'>Firebase</span>
                        <span className='mx-1'>MongoDb</span>
                        <span className='mx-1'>Node.js</span>
                        <span className='mx-2'>Express</span>
                    </small>
                </div>
                </div>
            </Zoom>
                <div className="card mx-2 rounded">
                    <img src={secondImage} className="card-img-top rounded" height="100%" alt="..." />
                    <div className='card-body d-flex'>
                        <h5><a className='px-2 text-white' href="https://nish-website-9cda1.web.app/">Live</a></h5>
                        <h5><a className='p-2 text-white' href="https://github.com/farukwebcode21/Rolex-Brand-shop">Git</a></h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-white">
                            <span className='mx-1'>React</span>
                            <span className='mx-1'>Firebase</span>
                            <span className='mx-1'>MongoDb</span>
                            <span className='mx-1'>Node.js</span>
                            <span className='mx-2'>Express</span>
                        </small>
                    </div>
                </div>
                <div className="card mx-2 rounded">
                    <img src={thiredImage} className="card-img-top rounded" height="100%"s alt="..." />
                    <div className='card-body d-flex'>
                        <h5><a className='px-2 text-white' href="https://react-firebase-authenatication.web.app/">Live</a></h5>
                        <h5><a className='p-2 text-white' href="https://github.com/farukwebcode21/clothing-ecommerce-shop">Git</a></h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-white">
                            <span className='mx-1'>React</span>
                            <span className='mx-1'>Firebase</span>
                            <span className='mx-1'>MongoDb</span>
                            <span className='mx-1'>Node.js</span>
                            <span className='mx-2'>Express</span>
                        </small>
                    </div>
                </div>
            </div>
            <div className="card-group">
            <Zoom bottom cascade>
                <div className="card mx-2 rounded">
                <img src={sixImage} className="card-img-top rounded" height="100%" alt="..." />
                <div className='card-body d-flex'>
                    <h5><a className='px-2 text-white' href="https://bahabuli-3.netlify.app/">Live</a></h5>
                    <h5><a className='p-2 text-white' href="https://github.com/farukwebcode21/super-hero-bahabuli">Git</a></h5>
                </div>
                <div className="card-footer">
                    <small className="text-white">
                        <span className='mx-1'>React</span>
                        <span className='mx-1'>Firebase</span>
                        <span className='mx-1'>MongoDb</span>
                        <span className='mx-1'>Node.js</span>
                        <span className='mx-2'>Express</span>
                    </small>
                </div>
                </div>
            </Zoom>
                <div className="card mx-2 rounded">
                    <img src={fourImage} className="card-img-top rounded" height="100%" alt="..." />
                    <div className='card-body d-flex'>
                        <h5><a className='px-2 text-white' href="https://cbr300.netlify.app/">Live</a></h5>
                        <h5><a className='p-2 text-white' href="https://github.com/farukwebcode21/honda-shop">Git</a></h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-white">
                            <span className='mx-1'>React</span>
                            <span className='mx-1'>Firebase</span>
                            <span className='mx-1'>MongoDb</span>
                            <span className='mx-1'>Node.js</span>
                            <span className='mx-2'>Express</span>
                        </small>
                    </div>
                </div>
                <div className="card mx-2 rounded">
                    <img src={fiveImage} className="card-img-top rounded" height="100%"s alt="..." />
                    <div className='card-body d-flex'>
                        <h5><a className='px-2 text-white' href="https://health-care-5b2d5.web.app/">Live</a></h5>
                        <h5><a className='p-2 text-white' href="https://github.com/farukwebcode21/health-service">Git</a></h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-white">
                            <span className='mx-1'>React</span>
                            <span className='mx-1'>Firebase</span>
                            <span className='mx-1'>MongoDb</span>
                            <span className='mx-1'>Node.js</span>
                            <span className='mx-2'>Express</span>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
