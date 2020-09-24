import React from 'react';

import Mastercard from '../images/payment/MasterCard.png'
import Visa from '../images/payment/visa.png'
import Maestro from '../images/payment/maestro.png'
import MercadoPago from '../images/payment/mercadoPago.png'
import Naranja from '../images/payment/naranja.svg'
import Galicia from '../images/payment/galicia.png'

import './styles/payment.css'
class Payment extends React.Component{
    render(){
        return(
            <div>
                
                    <h2 className="payment--title">Formas de pago</h2>
                    <div >
                        <div className="payment__container">
                            <div className="payment__container--text">
                                <p>Efectivo o Trasnferencia bancaria </p>
                                <p>Tarjetas de crédito</p>
                                <p>Tarjetas de dédito</p>
                            </div>
                            <div className="payment__container--img">
                                <img src={Mastercard}alt=""/>
                                <img src={Visa}alt=""/>
                                <img src={Maestro} alt=""/>
                                <img src={MercadoPago} alt=""/>
                                <img src={Naranja} alt=""/>
                                <img className="payment__container--logo-horizontal"src={Galicia} alt=""/>
                            </div>
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default Payment;