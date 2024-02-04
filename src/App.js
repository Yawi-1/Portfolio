import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Portfolio/Navbar';
import Main from './Portfolio/Main';
import About from './Portfolio/About';
import Contact from './Portfolio/Contact';
import Project from './Portfolio/Project';
import Footer from './Portfolio/Footer';
const App = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
            <Route path="/" Component={Main}/>
            <Route path="/about" Component={About}/>
            <Route path="/project" Component={Project}/>
            <Route path="/contact" Component={Contact}/>
           </Routes>
           <Footer/>
        </div>
    )
}

export default App
