import React from 'react'
import Contact from '../Contact/Contact'
import Header from '../Header/Header'
import Portfolio from '../Portfolio/Portfolio'
import Skill from '../Skill/Skill'
import Test from '../Test/Test'

const Home = () => {
    return (
        <div>
            <Header />
            <Test/>
            <Skill />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home
