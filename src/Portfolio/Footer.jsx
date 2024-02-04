import React from 'react'
import './Css/Footer.css';
import { FaInstagram,FaFacebook,FaLinkedin,FaWhatsapp } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
        <footer>
        <div className='footer'>
         <div className='inner-footer'>
            <h5>Yawi.dev</h5>
            <p>Address:</p>
           <a href="https://maps.app.goo.gl/xRyGBZ3K5BXM2jtA8"
              target="_blank" >Kralchihal,Chamalwas,J&K-182146</a>
            <p>Contact:</p>
            <a href="">6006704662</a>
            <a href="">yawimalik786@gmail.com</a>
            </div>
         <div className='extra-links'>
            <h5>External Links</h5>
           <a href="https://yawi-1.github.io/collegeWebsite.github.io/">University Website</a>
           <a href="https://formsubmit.co/el/gefoje">Contact Me</a>
           <a href=""></a>
           <a href=""></a>
         </div>
         <div className='social-links'>
            <h5>Let's Connect</h5>
           <div className='connect-links'>
            <a href="https://www.instagram.com/hey__yawii__/" taget="_blank" ><FaInstagram/></a>
            <a href="https://www.facebook.com/yawi.malik.56" taget="_blank" ><FaFacebook/></a>
            <a href="https://www.linkedin.com/in/mudasir143/" taget="_blank" ><FaLinkedin/></a>
            </div>
            </div>
         </div>
        <hr/>
         <div className='footer-end'>
            <p>© 2023 Yawi All rights reserved</p>
         </div>
         </footer>
         </>
    )
}

export default Footer
