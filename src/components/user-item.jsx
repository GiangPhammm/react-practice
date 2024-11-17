import React, {useContext} from 'react';

import {Context} from '../context';

export const UserItem = () => {
    const context = useContext(Context);

    return (
        <>
            {context.active ?
                context.users.map((item) => (
                    <div key={item.id}>
                        {item.name}
                    </div>
                ))
            : null
            }

            <hr />
            <button onClick={context.toggleActive}>
                Toggle Active
            </button>
        </>
    );
};