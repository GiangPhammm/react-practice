import React from 'react';

export const Header = () => {
    const inputChangeHandler = (event) => {
        console.log(event.target.value)
    }

    return (
        <header>
            <div className='logo'>
                Logo
            </div>
            <input
                onChange={inputChangeHandler}
            />
        </header>
    )
}
