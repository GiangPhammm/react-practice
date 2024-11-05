import React, {useState} from 'react';

export const Header = () => {
    const [state, setState] = useState({
        active: 'active',
        keywords: '',
    });

    const inputChangeHandler = (event) => {
        const value = event.target.value === '' ? 'active' : 'not-active';

        setState(() => ({
            active: value,
            keywords: event.target.value
        }));
    }

    return (
        // <header style={{background: `${state.active ? 'red' : 'blue'}`}}>
        <header className={state.active}>
            <div className='logo'>
                Logo
            </div>
            <input
                onChange={inputChangeHandler}
            />
        </header>
    );
};
