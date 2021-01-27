import React from 'react';

export default class Content extends React.Component {
    render() {
        return (
            <p className={this.props.className} className='content'>{this.props.text}</p>
        );
    }
}