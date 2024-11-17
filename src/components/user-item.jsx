import React, {useContext} from 'react';

import {Context} from '../context';

export const UserItem = () => {
    const context = useContext(Context);

    console.log(context);

    return (
        <>
            User Item
        </>
    );
};