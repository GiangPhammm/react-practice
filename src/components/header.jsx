import React, {useState} from 'react';

// Functional components use much less resources
// Class-based components are more powerful
export const Header = (props) => {
    return (
        <header>
            <div className='logo'>
                Logo
            </div>
            <input
                onChange={props.keywords}
            />
        </header>
    );
}; 
