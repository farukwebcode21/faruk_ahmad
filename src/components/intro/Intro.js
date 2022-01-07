import React from 'react'
import './intro.css';
import Profile from '../../img/faruk.png';
const Intro = () => {
    return (
        <div className=''>
            <div className='intro'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello, My Name is </h2>
                    <h2 className='i-name'>Faruk Ahmad</h2>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Web Developer</div>
                            <div className='i-title-item'>MERN</div>
                            <div className='i-title-item'>React</div>
                        </div>
                    </div>
                    <div className='i-des'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam illum tempore eligendi sint sunt non, repudiandae minus esse deserunt? Laborum dolores quibusdam commodi illum adipisci.
                    </div>
                </div>
            </div>
            <div className='i-right'>
                <div className="i-bg"></div>
                <img src={Profile} alt="" className='i-img'/>
            </div>
        </div>
        </div>
    )
}

export default Intro
