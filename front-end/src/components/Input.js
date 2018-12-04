import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div className={'form-group'}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input type={this.props.type} value={this.props.value} className={'form-control'} id={this.props.name} onChange={this.props.onChange} required />
            </div>
        );
    }
}

export default Input;
