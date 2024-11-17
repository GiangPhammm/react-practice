import React, {Component} from 'react';

export const Context = React.createContext();

export class Provider extends Component {
    state = {
        users: [
            {id: 1, name: 'Francis'},
            {id: 2, name: 'Steve'},
            {id: 3, name: 'Lisa'}
        ],
        active: true,
    };

    toggleActive = () => {
        this.setState({active: !this.state.active});
    }

    render() {
        return (
            <Context.Provider value={{
                users: this.state.users,
                active: this.state.active,
                toggleActive: this.toggleActive,
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}