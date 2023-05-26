import React from "react";

const ContactPage = () => {
    return(
        <div className='page content-page contact-page'>
            <div className='contact-div'>
                <div className='contact-links'>
                    <a href='https://github.com/samoore036'><img src={'./icons/github.png'} alt='Github Link'/></a>
                    <a href='https://github.com/samoore036/shopping-cart'><img src={'./icons/code-json.png'} alt='Code Link'/></a>
                    <a href=''><img src={'./icons/email.png'} alt='Email Link'/></a>
                    <a href=''><img src={'./icons/instagram.png'} alt='Instagram Link'/></a>
                </div>
                <div className='contact-info'>
                    <p>Khoob LLC | fake_email@khoob.com</p>
                    <p>Random PO Box #1234, State</p>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;