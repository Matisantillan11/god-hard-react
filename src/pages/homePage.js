import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import Services from '../components/services';
import Us from '../components/us';
import Contact from '../components/contact'

import ReactGA from 'react-ga';

import './styles/homePage.css';

const HomePage= ()=>{
    
    
        useEffect(()=>{

        ReactGA.initialize('G-3LK7V8J38J')
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [])
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


export default HomePage;