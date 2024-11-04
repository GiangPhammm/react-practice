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

    console.log(state)

    return (
        <header>
            <div className='logo'>
                Logo
            </div>
            <input
                onChange={inputChangeHandler}
            />
            <div>{state.title}</div>
            <div>{state.keywords}</div>

            <br />
            <div>{state.count}</div>
            <button onClick={() => addOne()}>
                Add one
            </button>
        </header>
    );
};
