import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/footer';

import laptop from '../images/icons/laptop.svg';
import coding from '../images/icons/coding.svg';
import error from '../images/icons/404-error.svg';
import Imagen from '../images/technology-header.jpg'
import './styles/homePage.css';

class HomePage extends React.Component{
    render(){
        return (
            <div>
                <NavBar />
                <div className="header">
                    <div className="header__container">
                        <h1 className="header__container--title">Las mejores soluciones de la mano del mejor equipo</h1>  
                        <p className="header__container--subtitle "> Vivi una experiencia diferente!</p>  
                    </div>
                    <button className="header__button">Conocenos!</button>
                </div>
                <div className="we-are">
                    <h2 className="we-are__title">QUIENES SOMOS</h2>
                    <div className="we-are__container">
                        <p><b>GodHard</b> es una PYME dedicada a la prestación de servicios informáticos orientada tanto a los clientes particulares así como a los clientes corporativos. </p>
                        <p><br></br><b>GodHard</b> brinda sus servicios con la mejor atención, completamente personalizada, entendiendo que cada cliente es único, creando una solución a la medida de cada uno. Trabajamos de manera remota o a domicilio si es necesario con tal de asegurarnos y garantizar el correcto funcionamiento de tu equipo o sistema, permitiendolés a todo el mundo centrarse en solo en el uso de los mismos. </p>
                        <p><br></br><b>PARA EL MANTENIMIENTO ESTAMOS NOSOTROS 😉</b></p>
                    </div>
                </div>
                <div className="our-services">
                    <h2 className="our-services__title">SERVICIOS</h2>
                    <div className="our-services__services">
                        <div className="our-services__container">
                            <img src={laptop} alt="" className="our__service-img"/>
                            <h3 className="our__service-title">Reparación y mantenimiento de equipos informáticos</h3>
                            <p>Nuestro eficiente y veloz modelo de servicio como Soporte Técnico informático, nos permite realizar una observación, cotización y reparación del equipo en menos de 24hs, siendo uno de los más veloces del mercado y disminuyendo la cantidad de inconvenientes a futuro y las futuras perdida de tiempo que se tiene cuando un equipo se encuentra sin funcionamiento.</p>
                        </div>
                        <div className="our-services__container">
                            <img src={coding} alt="" className="our__service-img"/>
                            <h3>Diseño y desarrollo de páginas web</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, rem modi. Ipsam placeat doloribus eligendi.</p>
                        </div>
                        <div className="our-services__container">
                            <img src={error} alt="" className="our__service-img"/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, rem modi. Ipsam placeat doloribus eligendi.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default HomePage;