import React from 'react';

import SideContent from '../Contents/SideContent.js';
import MainContent from '../Contents/MainContent.js';

export default class SideBarLayout extends React.Component {
    render() {
        return (
            <div className='layout sideBarLayout'>
                <SideContent />
                <MainContent />
            </div>
        );
    }
}