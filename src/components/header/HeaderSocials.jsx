import React from 'react'

import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/hossam-yehia-83a623243" target="_blank">< BsLinkedin /></a>
            <a href="https://github.com/Hossam-A-Yehia" target="_blank"><BsGithub /></a>
            <a href="https://www.facebook.com/profile.php?id=100004526087067&mibextid=ZbWKwL" target="_blank"><FaFacebook /></a>
        </div>
    )
}

export default HeaderSocials