import React from 'react';

import {NewListItem} from './news-list-item';

export const NewList = (props) => {
    return (
        <>
            {props.news.map((item) => (
                <NewListItem
                    key={item.id}
                    item={item}
                />
            ))}
        </>
    )
}
