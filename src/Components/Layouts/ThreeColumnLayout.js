import React from 'react';

import Content from '../Contents/Content.js';

export default class ThreeColumnLayout extends React.Component {
    render() {
        return (
            <div className='layout threeCols'>
                <Content text='Content 1' />
                <Content text='Content 2' />
                <Content text='Content 3' />
                <Content text='Content 4' />
                <Content text='Content 5' />
                <Content text='Content 6' />
            </div>
        );
    }
}