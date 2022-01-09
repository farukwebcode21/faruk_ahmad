import React from 'react'
import { Zoom } from 'react-reveal'
import './skill.css'
const Skill = () => {
    return (
        <div className='container my-5'>
            <Zoom top cascade><h1 className='text-center mb-5 text-uppercase'>Skill</h1></Zoom>
            <div className='row'>
                <div className='col-md-6'>
                    <Zoom bottom cascade>
                        <div className='skill-item mb-4'>
                        <h3 className='fs-6'>HTML</h3>
                        <div className='progress' style={{ height:'10px'}}>
                            <div class="progress-bar bg-success" role="progressbar" style={{width: '95%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    </Zoom>
                    <div className='skill-item mb-4'>
                        <h3 className='fs-6'>CSS</h3>
                        <div className='progress' style={{ height:'10px'}}>
                            <div class="progress-bar bg-success" role="progressbar" style={{width: '90%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className='skill-item mb-4'>
                        <h3 className='fs-6'>BOOTSTRAP-5</h3>
                        <div className='progress' style={{ height:'10px'}}>
                            <div class="progress-bar bg-success" role="progressbar" style={{width: '85%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className='skill-item mb-4'>
                        <h3 className='fs-6'>JAVASCRIPT</h3>
                        <div className='progress' style={{ height:'10px'}}>
                            <div class="progress-bar bg-success" role="progressbar" style={{width: '75%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className='skill-item mb-4'>
                        <h3 className='fs-6'>MATERIAL UI</h3>
                        <div className='progress' style={{ height:'10px'}}>
                            <div class="progress-bar bg-success" role="progressbar" style={{width: '55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='skill-item mb-4'>
                        <h3 className='fs-6'>REACT</h3>
                        <div className='progress' style={{ height:'10px'}}>
                            <div class="progress-bar bg-success" role="progressbar" style={{width: '85%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className='skill-item mb-4'>
                        <h3 className='fs-6'>NODE,JS</h3>
                        <div className='progress' style={{ height:'10px'}}>
                            <div class="progress-bar bg-success" role="progressbar" style={{width: '75%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className='skill-item mb-4'>
                        <h3 className='fs-6'>EXPRESS.JS</h3>
                        <div className='progress' style={{ height:'10px'}}>
                            <div class="progress-bar bg-success" role="progressbar" style={{width: '65%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className='skill-item mb-4'>
                        <h3 className='fs-6'>MONGODB</h3>
                        <div className='progress' style={{ height:'10px'}}>
                            <div class="progress-bar bg-success" role="progressbar" style={{width: '55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className='skill-item mb-4'>
                        <h3 className='fs-6'>FIREBASE</h3>
                        <div className='progress' style={{ height:'10px'}}>
                            <div class="progress-bar bg-success" role="progressbar" style={{width: '65%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
