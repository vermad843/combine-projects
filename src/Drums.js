import React from 'react';
import './Drums.css'
import Card from './Card';

function Drums() {
    return (
        <div className = "drums">
            <h1>Shop</h1>
            <div className = "drums__header">
               <h3>Filter By</h3>
               <h3>All Products</h3>
               <h3>15 Products</h3>
            </div>
            <div className = "drums__cards">
                <div className = "drums__card">
                    <Card/>
                </div>  
                <div className = "drums__card">
                    <Card/>
                </div>  
                <div className = "drums__card">
                    <Card/>
                </div>  <div className = "drums__card">
                    <Card/>
                </div>      
            </div>
        </div>
    )
}

export default Drums;
