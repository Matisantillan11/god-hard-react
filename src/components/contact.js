import React from 'react';

import Linkedin from '../images/icons/social-media/linkedin.svg'
import Github from '../images/icons/social-media/github.png'
import Gmail from '../images/icons/social-media/gmail.svg'

import './styles/contact.css';
class Contact extends React.Component{
    render(){
        return (
            <div id="contact">
                <h2 className="contact--title">Contacto</h2>
                <div className="contact__container">
                    <div className="contact__container-map" >
                        <iframe className="map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.0659313616634!2d-64.23076738515749!3d-31.43985180453259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2171035a2ab%3A0x29b4c45d5bde594f!2sLa%20Paz%202653%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1600919879146!5m2!1ses-419!2sar"></iframe>
                        <span className="contact__container--redes">
                            <a href="mailto:matias1.santillan@gmail.com"><img src={Gmail} alt=""/></a>
                            <a href="https://github.com/Matisantillan11"><img src={Github} alt=""/></a>
                            <a href="https://www.linkedin.com/in/matisantillan11"><img src={Linkedin} alt=""/></a>
                        </span>
                        
                    </div>
                </div>  
            </div>
        )
    }
}

export default Contact;