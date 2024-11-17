import React from 'react';

const AgeButton = ({handleAge}) => {
    return (
        <>
            <button onClick={handleAge}>
                Increment the age
            </button>
        </>
    );
};

export default React.memo(AgeButton);
