
import React from 'react';
import Payment from '../components/payment';
import Contact from '../components/contact';


import './styles/footer.css'
class Footer extends React.Component{
    render(){
        return (
            <div>
                <div className="footer">
                    <div className="footer__container">
                        <div className="payment">
                            <Payment />
                        </div>
                        <div className="contact">
                            <Contact />

                        </div>
                    </div>
                    
                </div>

            </div>
            )
    }
}
export default Footer;