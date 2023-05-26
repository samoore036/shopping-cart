import React from "react";
import quotes from '../utilities/quotes';
import { Link } from 'react-router-dom';

const HomePage = () => {

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return(
            <p className='quote-p'>{quotes[randomIndex].quote}<span className='author-span'>- {quotes[randomIndex].author}</span></p>
        )
    }

    return(
        <div className='page content-page home-page'>
            <div className='home-left'>
                <h3>classic middle eastern art</h3>
                {getRandomQuote()}
                <button className='view-collection-button'><Link to='/Collection'>View Collection</Link></button>
            </div>
            <div className='home-right'>
                <img className='homepage-img' src={'./images/rainbow mosque.jpg'} alt='Rainbow Mosque'/>
            </div>
        </div>
    )
}

export default HomePage;