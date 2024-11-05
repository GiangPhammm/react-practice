import React from 'react';

export const NewList = (props) => {
    return (
        <>
            {props.news.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <div>
                        {item.feed}
                    </div>
                </div>
            ))}
        </>
    )
}