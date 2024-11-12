// class type component

import React, {Component} from 'react';

export class Life extends Component {
    constructor(props) {
        super(props);

        this.state = {action: ''};
        console.log('1-contructor')
    }

    // first real lifecycle on a component within react that kicks in
    static getDerivedStateFromProps() {
        console.log('2-getDerivedStateFromProps')
        return null;
    }

    // everything got mounted after the render is visible
    componentDidMount() {
        console.log('4-componentDidMount')
    }

    // listen when react remove components from screen
    componentWillUnmount() {
        console.log('5-componentWillUnmount')
    }

    render() {
        console.log('3-render')
        return (
            <div>
                LIFE
            </div>
        )
    }
}
