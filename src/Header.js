import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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
                <SearchIcon className = "header__right__icon"/>
                <PersonIcon className = "header__right__icon"/>
                <ShoppingCartIcon className = "header__right__icon"/>
            </div>
        </div>
    )
}

export default Header;
