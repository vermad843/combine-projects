import React from 'react';
import './Card.css';
import Product from './Product';

function Card() {
    return (
        <div className = "card">
            <div className = "card__row">
               <Product
                    id = '12321341'
                    title = "AudioTechnica"
                    price = {11300}
                    rating = {3}
                    image = "AudioTechnica.jpg"
                />
                <Product
                    id = '12321341'
                    title = "AudioTechnica"
                    price = {11300}
                    rating = {3}
                    image = "AudioTechnica.jpg"
                />
                <Product
                    id = '12321341'
                    title = "AudioTechnica"
                    price = {11300}
                    rating = {3}
                    image = "AudioTechnica.jpg"
                />
                <Product
                    id = '12321341'
                    title = "AudioTechnica"
                    price = {11300}
                    rating = {3}
                    image = "AudioTechnica.jpg"
                />
            </div>
        </div>
    )
}

export default Card
