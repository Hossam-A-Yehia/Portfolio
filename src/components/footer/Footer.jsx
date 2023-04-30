import React from 'react'
import "./footer.css"
import { FaFacebook } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { BsLinkedin } from "react-icons/bs"
function Footer() {
    return (
        <footer>
            <a href='#' className='footer__logo'>EreYehia^4O4</a>
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://www.facebook.com/profile.php?id=100004526087067&mibextid=ZbWKwL' target='_blank'><FaFacebook /></a>
                <a href='https://instagram.com/tx_rintarou?igshid=ZDdkNTZiNTM=' target='_blank'><FiInstagram /></a>
                <a href='https://www.linkedin.com/in/hossam-yehia-83a623243' target='_blank'><BsLinkedin /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; EreYehia^4O4. All right reserved</small>
            </div>
        </footer>
    )
}

export default Footer