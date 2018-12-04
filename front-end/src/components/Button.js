import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button type={this.props.type} className={'btn btn-primary'} style={{marginBottom: 2 + "em"}}>{this.props.texto}</button>
        );
    }
}

export default Button;
