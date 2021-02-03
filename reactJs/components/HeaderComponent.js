import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className = "text-center">
                <h2 className = "navbar-brand">Notes App</h2>
            </div>
        );
    }
}

HeaderComponent.propTypes = {

};

export default HeaderComponent;