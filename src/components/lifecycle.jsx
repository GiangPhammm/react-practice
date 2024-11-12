// class type component

import React, {Component} from 'react';

export class Life extends Component {
    constructor(props) {
        super(props);

        this.state = {name: 'Francis'};
        console.log('1-contructor');
    }

    // first real lifecycle on a component within react that kicks in
    // get access to current state, and props
    static getDerivedStateFromProps(props, state) {
        console.log('2-getDerivedStateFromProps');

        // intercept the state
        if (state.name === 'Ron') {
            return {
                name: 'Milhouse'
            }
        }
        return null;
    }

    // everything got mounted after the render is visible
    componentDidMount() {
        console.log('4-componentDidMount');
    }

    // listen when react remove components from screen
    componentWillUnmount() {
        console.log('5-componentWillUnmount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.name === 'Steve'){
            return false
        }

        return true;
    }

    // store snapshots of something and pass along to other lifecycle
    getSnapshotBeforeUpdate(prevProps, prevState) {
        let age = 20;

        return age;
    }

    // trigger if the component was updated
    componentDidUpdate(prevProps, prevState, snapshots) {
        // console.log(prevState);
        // console.log(this.state);
        console.log(snapshots)
    }


    render() {
        console.log('3-render')
        return (
            <div>
                <div>{this.state.name}</div>
                <div onClick={() => this.setState({name: 'Ron'})}>
                    change name
                </div>
            </div>
        )
    }
}
