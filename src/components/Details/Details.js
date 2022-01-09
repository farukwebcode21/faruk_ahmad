import React from 'react'

const Details = ({portfolio}) => {

    return (
        <div className="card mx-2 rounded">
            <img src="" className="card-img-top rounded" height="100%" alt="..." />
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
    )
}

export default Details
