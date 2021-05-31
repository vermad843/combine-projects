import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className = "footer">
            <div className = "payment">
               <div className = "payment__icon">
                   <img
                      src = "GooglePay.svg"
                     />
                   <h2>Payment logos</h2>
               </div>
            </div>
            <h1>All rights reserved @2021</h1>
        </div>
    )
}

export default Footer;
