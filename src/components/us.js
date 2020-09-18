import React from 'react';

import visionPhoto from '../images/planification.jpg'
import misionPhoto from '../images/idea.jpg'
import './styles/us.css'
class Us extends React.Component{
    render(){
        return(
            <div>
                <div id="us"className="we-are">
                    <h2 className="we-are__title">QUIENES SOMOS</h2>
                    <div className="we-are__container">
                        <p><b>GodHard</b> es una PYME dedicada a la prestación de servicios informáticos orientada tanto a los clientes particulares así como a los clientes corporativos. </p>
                        <p><br></br><b>GodHard</b> brinda sus servicios con la mejor atención, completamente personalizada, entendiendo que cada cliente es único, creando una solución a la medida de cada uno. Trabajamos de manera remota o a domicilio si es necesario con tal de asegurarnos y garantizar el correcto funcionamiento de tu equipo o sistema, permitiendolés a todo el mundo centrarse en solo en el uso de los mismos. </p>
                        <p><br></br><b>PARA EL MANTENIMIENTO ESTAMOS NOSOTROS 😉</b></p>
                    </div>
                </div>
                <div className="our-purpose">

                    <div className="our-purpose__container">
                        <img className="our-purpose__img"src={misionPhoto} alt=""/>
                        <div className="our-purpose__container-text">
                            <h3>Mision</h3>
                            <p >Prevenir y solucionar los problemas informáticos de nuestros cliente para permitirles un mayor y mejor uso de sus equipos/sistemas</p>
                        </div>
                        
                    </div>
                    <div className="our-purpose__container">
                    <img className="our-purpose__img"src={visionPhoto} alt=""/>
                        <div className="our-purpose__container-text">
                            <h3>Vision</h3>
                            <p >Proveer nuestros servicios con la más alta calidad orientada a asegurar el mayor y mejor uso sus equipos/sistemas a través de la utilización de nuevas e innovadoras tecnologías, logrando una sociedad confiable y sostenible a largo plazo.</p>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
export default Us;