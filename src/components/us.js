import React from 'react';

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
            </div>
        )

    }
}
export default Us;