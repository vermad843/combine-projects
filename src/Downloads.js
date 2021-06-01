import React from 'react';
import './Downloads.css';
import Card from './Card';

function Downloads() {
    return (
        <div className = "drums">
        <h1>Downloads</h1>
        <div className = "drums__header">
           <h3>Filter By</h3>
           <div>
           <select value="All Products">
              <option value="All Products">All Products</option>
              <option value="Drum KIts">Drum Kits</option>
              <option value="Melody Kits">Melody Kits</option>
           </select>
           </div>
           <h3>3 Products</h3>
        </div>
        <div className = "drums__cards">
            <div className = "drums__card">
                <Card/>
            </div>    
        </div>
    </div>
    )
}

export default Downloads
