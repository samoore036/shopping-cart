import React from 'react';

const Card = (props) => {
    const {id, fileName, name, price, handleClick} = props;

    return(
        <div className='card'>
            <img src={`./images/${fileName}`} alt={`${name}`}/>
            <div className='card-info'>
                <p className='name-p'>{name}</p>
                <p>${price}</p>
            </div>
            <button onClick={() => handleClick(id)}>Add to cart</button>
        </div>
    )
}

export default Card;