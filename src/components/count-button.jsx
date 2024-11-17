import React from 'react';

const CountButton = ({handleCount}) => {
    return (
        <>
            <button onClick={handleCount}>
                Increment the count
            </button>
        </>
    );
};

export default React.memo(CountButton);
