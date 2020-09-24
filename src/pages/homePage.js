import React from 'react';
import {Link} from 'react-router-dom';

import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import Services from '../components/services';
import Us from '../components/us';
import Contact from '../components/contact'


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
                    <a href="#us" className="header__button" >Conocenos!</a>
                </div>
                <Us />
                <Services />
                <Footer />
            </div>
        )
    }
}

export default HomePage;