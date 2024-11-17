import React, {Component} from 'react';

import {UserItem} from './user-item';

import {Context} from '../context';

// access context from class
// it's easier to use context on functional component tho (UserItem)
export class User extends Component{
    // reserved keyword
    // one contextType per class
    // static contextType = Context;



    render() {
        return (
            <>
                <Context.Consumer>
                    {context => {
                        console.log(context)
                    }}
                </Context.Consumer>
                <UserItem />
            </>
        );
    }
};
