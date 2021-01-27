import React from 'react';

export default class ShrinkContent extends React.Component {
    constructor(props) {
        super(props);

        this.increase = 1.5;
        this.originalWidth = 25;
        this.originalHeight = 15;

        this.state = {
            width: 25,
            height: 15,
            min: false,
        }
    }

    render() {
        return (
            <div className='content' style={{ width: `${ this.state.width }rem`, height: `${ this.state.height }rem`,  margin: 'auto' }} onFocus={ this.shrink } onMouseEnter={ this.shrink } onMouseLeave={ this.expand }>
            </div>
        );
    }

    // increase content width and height
    expand = () => {
        this.setState({ min: false });

        this.setState({ height: this.state.height * this.increase });
        this.setState({ width: this.state.width * this.increase });
    }

    // restore content width and height to original values
    shrink = () => {
        if (this.state.min) {
            this.expand();
            return
        }

        this.setState({ min: true });
        this.setState({ width: this.originalWidth });
        this.setState({ height: this.originalHeight });
    }
}