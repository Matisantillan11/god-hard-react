import React from 'react';


import laptop from '../images/icons/laptop.svg';
import coding from '../images/icons/coding.svg';
import error from '../images/icons/404-error.svg';
import sold from '../images/icons/sold.svg';
import hands from '../images/icons/hands.svg';

import './styles/services.css'

class Services extends React.Component{
    render(){
        return(
            <div>
                <div className="our-services">
                    <h2 className="our-services__title">SERVICIOS</h2>
                    <div className="our-services__services">
                        <div className="our-services__container">
                            <img src={laptop} alt="" className="our__service-img"/>
                            <h3 className="our__service-title">Reparación y mantenimiento de equipos informáticos</h3>
                            <p>Nuestro eficiente y veloz modelo de servicio como Soporte Técnico informático, nos permite realizar una cotización y reparación del equipo en menos de 24hs, siendo uno de los más veloces del mercado y disminuyendo las futuras perdidas de tiempo al tener un equipo sin funcionamiento.
                            <b>¿Qué equipos reparamos?</b> PC's, notebooks, celulares y tablets.
                            </p>
                        </div>
                        <div className="our-services__container">
                            <img src={coding} alt="" className="our__service-img"/>
                            <h3 className="our__service-title">Diseño y desarrollo web</h3>
                            <p>Desde <b>GodHard</b> ofrecemos la posibilidad de digitalizar tu negocio, ya sea para establecer tu e-commerce, realizar tu blog, presentar tu marca o lo que te propongas. Podemos hacerlo de manera profesional y con el mejor diseño, optimizando y mejorando los procesos de tu negocio de manera totalmente personalizada.</p>
                        </div>
                        <div className="our-services__container">
                            <img src={error} alt="" className="our__service-img"/>
                            <h3 className="our__service-title">Mantenimiento web</h3>
                            <p>Si ya tienes web desarrollada y deseas modificarla, en <b>GodHard</b> ofrecemos servicios de mantenimiento web, mediante los cuales te ayudamos a realizar cambios y mejoras en ella.  </p>
                        </div>
                        <div className="our-services__container">
                            <img src={hands} alt="" className="our__service-img"/>
                            <h3 className="our__service-title">Tercerización de servicios</h3>
                            <p>La especialización que requiere la informática, obliga a las empresas a tercerizar ciertos servicios a otras empresas. Puedés confiar en que trabajando con <b>GodHard</b> lograrás una optimización en los costos y rendimientos.</p>
                        </div>
                        <div className="our-services__container">
                            <img src={sold} alt="" className="our__service-img"/>
                            <h3 className="our__service-title">Venta de Equipos Informáticos</h3>
                            <p><b>GodHard</b> ofrece el mejor asesoramiento y financiamiento de manera virtual sobre que equipo se acomoda mejor a tus necesidades, de acuerdo a tu presupuesto. </p>
                        </div>
                
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;