import React from 'react';

const Age = ({age}) => {
    return (
        <>
            <h3>The age is : {age}</h3>
        </>
    );
};

export default React.memo(Age);
