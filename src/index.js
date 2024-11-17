import React, {useRef} from 'react';
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
    const textInput = useRef();

    const incrementCount = useCallback(() => {
        setCount(prevCount => prevCount+1)
    }, []);

    const incrementAge = useCallback(() => {
        setAge(prevAge => prevAge+1)
    }, []);

    const triggerHandler = () => {
        console.log(textInput.current.value);
    }

    return (
        <>
            <Title />
            <Count count={count} />
            <CountButton handleCount={incrementCount} />
            <Age age={age} />
            <AgeButton handleAge={incrementAge} />

            <h2>Form: </h2>
            <InputComponent ref={textInput}/>
            <button onClick={triggerHandler}>
                Trigger
            </button>
        </>
    );
};

const InputComponent = React.forwardRef((props, ref) => {
    return (
        <input type='text' ref={ref}/>
    )
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App initialCount={0}/>);
