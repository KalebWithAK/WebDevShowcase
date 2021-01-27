import React from 'react';

import ExpandContent from '../Components/Contents/ExpandContent.js';
import ShrinkContent from '../Components/Contents/ShrinkContent.js';

export default class SpecialContentView extends React.Component {
    render() {
        return (
            <div>
                <h1>Special Contents</h1>

                <h2>Expanding Content</h2>
                <ExpandContent />

                <h2>Shrinking Content</h2>
                <ShrinkContent />
            </div>
        );
    }
}