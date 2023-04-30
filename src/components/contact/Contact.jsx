import React, { useRef } from 'react'
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { BsGithub } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from '@emailjs/browser';



function Contact() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_arquvte', 'template_0j2raem', form.current, 'twjfcIalycanNTis5')
        e.target.reset()
    };


    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>hossamyehya477@gmail.com</h5>
                        <a href='mailto:hossamyehya477@gmail.com' target="_blank">Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsGithub className='contact__option-icon' />
                        <h4>Github</h4>
                        <h5>Hossam-A-Yehia</h5>
                        <a href='https://github.com/Hossam-A-Yehia' target="_blank">Open</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+201206001955</h5>
                        <a href='https://api.whatsapp.com/send?phone=+201206001955' target="_blank">Send a Message</a>
                    </article>
                </div>
                {/* End Contact Option */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name='message' placeholder='Your Message' rows={7} required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact