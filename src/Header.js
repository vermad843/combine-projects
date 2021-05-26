import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css';
import {
  Link
} from "react-router-dom";

function Header() {
    return (
        <div className = "header">
            <div className = "header__left">
               <h2>FICTION BEATS</h2>
            </div>
            <div className = "header__mid">
                <Link to = "/">
                  <div className = "header__mid__content">
                     <h2>HOME</h2>
                  </div> 
                </Link>
                <Link to = "/drum">
                  <div className = "header__mid__content">
                     <h2>DRUM& SAMPLE KITS</h2>     
                  </div>
                </Link>
                <Link to = "/contact">
                  <div className = "header__mid__content">
                    <h2>CONTACT</h2>
                  </div>
                </Link>
                <Link to = "/freedownloads">
                  <div className = "header__mid__content">
                    <h2>FREE DOWNLOADS</h2>
                  </div>
                </Link>
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
