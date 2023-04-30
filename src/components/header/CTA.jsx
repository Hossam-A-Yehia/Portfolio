import React from 'react'
import CV from "../../assets/CV.pdf"
function CTA() {
    return (
        <div className='cta'>
            <a href={CV} target='_blank' className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
            <a href="https://www.linkedin.com/in/hossam-yehia-83a623243" className="btn ">Linkedin</a>
        </div>
    )
}

export default CTA