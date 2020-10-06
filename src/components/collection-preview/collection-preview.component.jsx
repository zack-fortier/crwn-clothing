// When user clicks on shop, they will see a preview of every item in shop

import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        {/* Map each item from shop data array and add to collection, filter for only four items */}
        <div className='preview'>
            {
                items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;