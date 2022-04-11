import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar">
                <p className="text-white">
                    {this.props.tittle}
                </p>
            </nav>
        )
    }
}

export default Navigation;