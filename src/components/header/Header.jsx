import React from 'react'
import CTA from './CTA'
import "./header.css"
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials'
function Header() {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h2>Hossam Yehia</h2>
                <h5 className='text-light'>Front End Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className='me'>
                    <img src={ME} alt="me" />
                </div>
                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>

        </header>
    )
}

export default Header
