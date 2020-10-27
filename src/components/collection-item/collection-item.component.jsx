import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
        {/* Gives background image of each item in collection */}
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}    
        />
        {/* Returns name and price of each item in collection */}
        <div className='collection-footer'>
            <span className='name'>{ name }</span>
            <span className='price'>{ price }</span>
        </div>
        </div>
)

export default CollectionItem;