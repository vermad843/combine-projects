import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className = "header">
            <div className = "header__left">
               <h2>FICTION BEATS</h2>
            </div>
            <div className = "header__mid">
               <div className = "header__mid__content">
                 <h2>HOME</h2>
                </div> 
                <div className = "header__mid__content">
                   <h2>DRUM& SAMPLE KITS</h2>     
                </div>
                <div className = "header__mid__content">
                  <h2>CONTACT</h2>
                </div>
                <div className = "header__mid__content">
                  <h2>FREE DOWNLOADS</h2>
                </div>
            </div>
            <div className = "header__right">
               <h2>FICTION BEATS</h2>
            </div>
        </div>
    )
}

export default Header;
