import React from 'react';

const AgeButton = ({handleAge}) => {
    console.log('5-age button');

    return (
        <>
            <button onClick={handleAge}>
                Increment the age
            </button>
        </>
    );
};

export default React.memo(AgeButton);
