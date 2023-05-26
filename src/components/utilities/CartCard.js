import React from 'react';

const CartCard = (props) => {
    const {id, fileName, name, price, quantity} = props;

    return(
        <div className='cart-card'>
            <img src={`./images/${fileName}`} alt={`${name}`}/>
            <div className='cart-card-info'> 
                <div className='item-name'>{name}</div>
                <div>{(price * quantity).toFixed(2)}</div>
                <div className='quantity-div'>
                    <button onClick={() => props.reduceQuantity(id)}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => props.addQuantity(id)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartCard;