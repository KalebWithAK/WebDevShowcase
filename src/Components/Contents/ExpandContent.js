import React from 'react';

export default class ExpandContent extends React.Component {
    constructor(props) {
        super(props);

        this.increase = 1.5;
        this.originalWidth = 25;
        this.originalHeight = 15;

        this.state = {
            width: 25,
            height: 15,
            min: true,
        }
    }

    render() {
        return (
            <div className='content' style={{ width: `${ this.state.width }rem`, height: `${ this.state.height }rem`,  margin: 'auto' }} onFocus={ this.expand } onMouseEnter={ this.expand } onMouseLeave={ this.shrink }>
                
            </div>
        );
    }

    // increase content width and height
    expand = () => {
        if (!this.state.min) {
            this.shrink();
            return
        }

        this.setState({ min: false });

        this.setState({ height: this.state.height * this.increase });
        this.setState({ width: this.state.width * this.increase })

        console.log(`new width: ${ this.state.width }, new height: ${ this.state.height }`);
    }

    // restore content width and height to original values
    shrink = () => {
        this.setState({ min: true });
        this.setState({ width: this.originalWidth });
        this.setState({ height: this.originalHeight });
    }
}