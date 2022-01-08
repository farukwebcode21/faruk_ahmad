import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Portfolio from './components/Portfolio/Portfolio';
import Skill from './components/Skill/Skill';
import Test from './components/Test/Test';


function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Header />} />
          <Route path="/about" element={<Test />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
