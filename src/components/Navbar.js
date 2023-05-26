import React from "react";
import { Link } from 'react-router-dom';

const Navbar = props => {
    return(
        <div className='navbar'>
            <h2>Khoob</h2>
            <div className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/Collection'>Collection</Link>
                <Link to='/Contact'>Contact</Link>
                <div className='cart-div'>
                    <button className='shopping-cart-button' onClick={props.toggleCart}><Link to='/Shopping-Cart'><img src={'./icons/shopping cart.png'} alt='shopping cart icon'/></Link></button>
                    <p className='cart-count'>{props.itemCount}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;