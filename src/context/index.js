import React, {Component} from 'react';

export const Context = React.createContext();

export class Provider extends Component {
    state = {
        users: [
            {
                id: 1,
                name: 'Francis',
            },
            {
                id: 2,
                name: 'Steve',
            },
            {
                id: 3,
                name: 'Lisa',
            }
        ],
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}