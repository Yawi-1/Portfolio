import React from 'react'
import './Css/About.css';
import resume from './Images/resume.jpg'
import {FaPlus,FaDownload} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import giphy from './Images/giphy.gif'
const About = () => {
    return (
       <section className='about'>
         <div className='about-info'>
          <h1>FRONT END DEVELOPER</h1>
          </div>
        <div className='main-about'>
         <div>
         <h3>Hello there, I'm  <span>Mudasir Javid</span> </h3>
         <p>A passionate computer science student who loves web development and programming.
            I'm currently pursuing a degree in Computer Science at <a href="">Mrsptu Bathinda Pb. </a>
             My skills cover a variety of programming languages and web development technologies, such as <span>React,HTML,JS,CSS,Bootstrap,JAVA,C++ and DSA. </span>
             I'm always learning and exploring new tools to stay-up-to-date with latest technologies and to expand my knowledge continually.
             </p>
             <div className='about-buttons'>
             <a href={resume} download>
                            <button className='about-button'>Download Resume  <FaDownload/></button>
                        </a>
             <Link to="https://formsubmit.co/el/gefoje">
                            <button className='about-button btn2'>Contact Me <FaPlus/></button>
                        </Link>
           
             </div>
         </div>
         <div className='about-image'>
            <img className='about-image' src={giphy}/>
         </div>
        </div>
       </section>
    )
}

export default About
