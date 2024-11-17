import React from 'react';

const CountButton = ({handleCount}) => {
    console.log('3-count button');

    return (
        <>
            <button onClick={handleCount}>
                Increment the count
            </button>
        </>
    );
};

export default React.memo(CountButton);
