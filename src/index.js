import React from 'react';
import {useState, useCallback} from 'react';
import ReactDOM from 'react-dom/client';

import Title from './components/title';
import Count from './components/count';
import CountButton from './components/count-button';
import Age from './components/age';
import AgeButton from './components/age-button';

const App = () => {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(10);

    const incrementCount = useCallback(() => {
        setCount(prevCount => prevCount+1)
    }, []);

    const incrementAge = useCallback(() => {
        setAge(prevAge => prevAge+1)
    }, []);

    return (
        <>
            <Title />
            <Count count={count} />
            <CountButton handleCount={incrementCount} />
            <Age age={age} />
            <AgeButton handleAge={incrementAge} />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App initialCount={0}/>);
