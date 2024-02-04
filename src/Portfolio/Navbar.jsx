import React, { useRef, useState } from 'react'
import {Link} from 'react-router-dom';
import './Css/Navbar.css';
import {FaBars,FaTimes} from 'react-icons/fa';
import {FaHome,FaUserCircle,FaBuffer,FaPhoneSquareAlt} from 'react-icons/fa'
const Navbar = () => {
    const myRef = useRef(null); //Alternate of document.getElemenyBy
      const [toggle,setToggle]=useState(false);
    const showNav=()=>{
        if(!toggle) {
            myRef.current.style.display="flex";
            setToggle(!toggle);
        }
        else{
            myRef.current.style.display="none";
            setToggle(!toggle);
        }
        
    }
    return (
        <div>
           <nav>
        <div className='navbar'>

            <h1 className="title">Yawi.dev
            <span id="bar" onClick={showNav} >{toggle?<FaTimes/>:<FaBars/>}</span></h1>
        <div ref={myRef} className="links" id="a">
            <Link  to="/"><span class="nav-name">Home</span><span onClick={showNav}  className='nav-icon'><FaHome/></span></Link>
            <Link  to="/about"><span class="nav-name">About</span><span onClick={showNav}  className='nav-icon'><FaUserCircle/></span></Link>
            <Link   to="/project"><span class="nav-name">Project</span><span onClick={showNav}  className='nav-icon'><FaBuffer/></span></Link>
            <Link   to="/contact"><span class="nav-name">Contact</span><span onClick={showNav}  className='nav-icon'><FaPhoneSquareAlt/></span></Link>
        </div>
        </div>
    </nav>
        </div>
    )
}

export default Navbar
