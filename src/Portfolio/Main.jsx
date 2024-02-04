import React from 'react'
import {FaGithub,FaLinkedin, FaMapPin} from 'react-icons/fa';
import {FaHtml5,FaCss3,FaJs,FaBootstrap,FaReact} from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import './Css/Main.css';
import Yawi from './Images/Yawi.png'
import resume from './Images/resume.jpg'


const Main = () => {
    return (
        <div>
             <main>
                 <div className="main">
            <div className="info">
                <h1>Front-End React Developer 👋</h1>
                <p>Hi, I'm Mudasir Javid Malik. A passionate Front-end React
                    Developer based in Jammu and Kashmir. <span id="pin"><FaMapPin/></span>
                </p>
                <div className="icons">
                    <div>
                    <a id="linkedin" href="https://www.linkedin.com/in/mudasir143/" target="_blank">
                    <i><FaLinkedin/></i>
                    </a>
                    <a id="git-icon" href="https://github.com/Yawi-1" target="_blank">
                    <i><FaGithub/></i>
                     </a>
                     </div>
                     <div>
                        <a href={resume} download>
                            <button className='resume-button'>Download Resume <span><FaDownload/></span></button>
                        </a>
                     </div>
                </div>
            </div>
            <div className="image">
                <div className='img-div'>
                <img src={Yawi}/>
                </div>
            </div>
        </div>
                <div className="skills">
        <h3 className='stack'>Tech Stack |</h3>
                    <i id="html"><FaHtml5/></i>
                    <i id="css"><FaCss3/></i>
                    <i id="js"><FaJs/></i>
                    <i id="Bs"><FaBootstrap/></i>
                    <i id="React"><FaReact/></i>
                    {/* <i id="git"><FaGit/></i> */}
                    <i><FaGithub/></i>  
                </div>
    </main>
        </div>
    )
}

export default Main
