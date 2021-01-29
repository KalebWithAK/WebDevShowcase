import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LayoutsView from '../Views/LayoutsView.js';
import SpecialContentView from '../Views/SpecialContentView.js';
import NavBarsView from '../Views/NavBarsView.js';
import AboutView from '../Views/AboutView.js';
import NavBar from '../Components/Top/NavBar.js';

export default class ViewsRouter extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <NavBar />

                    <Switch>
                        <Route exact path='/'><LayoutsView /></Route>
                        <Route path='/specialContent'><SpecialContentView /></Route>
                        <Route path='/navBars'><NavBarsView /></Route>
                        <Route path='/about'><AboutView /></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}