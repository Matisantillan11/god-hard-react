import React from 'react';

import logo from '../images/logo.png';
import './styles/navBar.css'
class NavBar extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="navBar">
                    <div className="navBar__container">
                        <img className="navBar__container--logo" src={logo} alt=""/>
                        <a className="navBar__container--link"> GodHard: Solucines informáticas</a>
                    </div>
                </div>
            </React.Fragment>
            
            )
    }
}
export default NavBar;