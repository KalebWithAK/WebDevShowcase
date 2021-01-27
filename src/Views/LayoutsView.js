import React from 'react';

import TwoColumnLayout from '../Components/Layouts/TwoColumnLayout.js';
import ThreeColumnLayout from '../Components/Layouts/ThreeColumnLayout.js';
import SideBarLayout from '../Components/Layouts/SideBarLayout.js';

import Content from '../Components/Contents/Content.js';

export default class LayoutsView extends React.Component {
    render() {
        return (
            <div>
                <h1>Layouts</h1>

                <h2>Two Columns</h2>
                <TwoColumnLayout />

                <h2>Three Columns</h2>
                <ThreeColumnLayout />

                <h2>SideBar</h2>
                <SideBarLayout />
            </div>
        );
    }
}