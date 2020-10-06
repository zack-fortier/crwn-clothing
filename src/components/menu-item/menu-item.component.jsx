import React from 'react';
import { withRouter } from 'react-router-dom';
import '../menu-item/menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    // On click of specific menu item go to specific link that matches menu item
    <div
        className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
    {/* Allowing background image of each menu item to be dynamically changed */}
    <div 
        className='background-image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
    />
    {/* Capitalize title of each menu item */}
    <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
    </div>
    </div>
)

export default withRouter(MenuItem);