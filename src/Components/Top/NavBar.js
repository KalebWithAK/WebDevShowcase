import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar  extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navs: [
                { title: 'Layouts', link: '/', id: 0 },
                { title: 'Special Content', link: '/specialContent', id: 1 },
                { title: 'Nav Bars', link: '/navBars', id: 2 },
            ],
        };
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', gap: '2rem'}}>
                { this.state.navs.map(nav => <Link key={ nav.id } to={ nav.link }>{ nav.title }</Link>) }
            </div>
        );
    }
}