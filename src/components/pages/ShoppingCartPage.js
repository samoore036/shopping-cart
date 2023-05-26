import React from 'react';
import CartCard from '../utilities/CartCard';
import { Link } from 'react-router-dom';

const ShoppingCartPage = props => {
    const {cart, itemCount} = props;

    function getSum() {
        let sum = 0;
        for (let item of cart.values()) {
            sum += item.quantity * item.price;
        }
        return sum.toFixed(2);
    }

    function getShipping() {
        let sum = getSum();
        if (sum <= 100) {
            return (itemCount * 8.99).toFixed(2);
        }
        return 0;
    }

    function getTotal() {
        return (parseInt(getSum()) + parseInt(getShipping())).toFixed(2);
    }

    const items = [];
    for (let item of cart.values()) {
            items.push(item);
    }

    const cards = items.map(item => {
        return(
            item.quantity > 0 ?
                <CartCard 
                    key={item.id}
                    {...item}
                    reduceQuantity={props.reduceQuantity}
                    addQuantity={props.addQuantity}
                /> : null
        )
    })

    return(
        <div className='page content-page shopping-cart-page'>
            {itemCount > 0 ? 
                <div className='shopping-cart-div'>
                    <div className='cart-title'>Your cart</div>
                    {cart.size > 0 && 
                    <div className='item-div'>
                        {cards}
                    </div>}
                    <div className='total-div'>
                        <div className='total-title'>Total</div>
                        <div className='subtotal-div'>
                            <div>Sub-total</div>
                            <div>{getSum()}</div>
                        </div>
                        <div className='subtotal-div shipping-div'>
                            <div>Shipping</div>
                            <div>{getShipping() !== 0 ? getShipping() : 'Free'}</div>
                        </div>
                        <div className='subtotal-div grand-total-div'>
                            <div>Grand total</div>
                            <div>${getTotal()}</div>
                        </div>
                        <button className='checkout-button'>Checkout</button>
                    </div>
                    
                    
                </div> : 
                <div className='empty-cart-div'>
                    <div>Your cart is empty!</div>
                    <button className='view-collection-button'><Link to='/Collection'>View Collection</Link></button>
                </div>}
        </div>
    )
}

export default ShoppingCartPage;