import React from 'react'
import firstImage from '../../img/7.png';
import secondImage from '../../img/8.png';
import thiredImage from '../../img/9.png';
import './portfolio.css';

const Portfolio = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-uppercase m-5'>PortFolio</h2>
            <div className="card-group">
                <div className="card mx-2 rounded">
                    <img src={firstImage} className="card-img-top rounded" height="100%" alt="..." />
                    <div className='card-body d-flex'>
                        <h5><a className='px-2 text-white' href="/">Live</a></h5>
                        <h5><a className='p-2 text-white' href="/">Git</a></h5>
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
                    <img src={secondImage} className="card-img-top rounded" height="100%" alt="..." />
                    <div className='card-body d-flex'>
                        <h5><a className='px-2 text-white' href="/">Live</a></h5>
                        <h5><a className='p-2 text-white' href="/">Git</a></h5>
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
                        <h5><a className='px-2 text-white' href="/">Live</a></h5>
                        <h5><a className='p-2 text-white' href="/">Git</a></h5>
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
