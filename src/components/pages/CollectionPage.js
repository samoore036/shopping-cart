import React from "react";
import collectionData from '../utilities/collection data';
import Card from '../utilities/Card';

const CollectionPage = props => {
    const items = collectionData.map(item => {
        return(
            <Card
                key={item.id}
                handleClick={props.addToCart}
                {...item}
            />
        )
    })

    return(
        <div className='page content-page'>
            <div className='collection-div'>
                {items}
            </div>
        </div>
    )
}

export default CollectionPage;