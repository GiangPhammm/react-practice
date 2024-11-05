import React, {useState} from 'react';

export const Header = () => {
    const [state, setState] = useState({
        name: 'Francis',
        title: 'The keywords are',
        keywords: '',
        count: 0,
    });

    const inputChangeHandler = (event) => {
        setState((prevState) => ({
            ...prevState,
            keywords: event.target.value
        }));
    }

    const addOne = () => {
        setState((prevState) => ({
            ...prevState,
            count: prevState.count + 1
        }));
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
    );
};
