import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LayoutsView from '../Views/LayoutsView.js';
import SpecialContentView from '../Views/SpecialContentView.js';
import NavBar from '../Components/NavBar.js';

export default class ViewsRouter extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <NavBar />

                    <Switch>
                        <Route exact path='/'><LayoutsView /></Route>
                    </Switch>
                    <Switch>
                        <Route path='/specialContent'><SpecialContentView /></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}