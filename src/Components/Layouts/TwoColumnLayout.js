import React from 'react';

import Content from '../Contents/Content.js';

export default class TwoColumnLayout extends React.Component {
    render() {
        return (
            <div className='layout twoCols'>
                <Content text='Content 1' />
                <Content text='Content 2' />
                <Content text='Content 3' />
                <Content text='Content 4' />
            </div>
        );
    }
}