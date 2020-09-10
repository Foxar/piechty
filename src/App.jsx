import React from 'react';
import About from './About';
import News from './News';
import Events from './Events';
import Contact from './Contact';
import Gallery from './Gallery';
import Rules from './Rules';
import logo from './logo.svg';
import {Container, Typography, Button, Grow, Paper} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            page: 'about',
        };
    }
    componentDidMount(){
    }
    render() {

        const {page} = this.state;

        return(
        <Router>
            <Switch>
                <Route exact path="/" component={About} />
                <Route path="/news" component={News}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/events" component={Events}/>
                <Route path="/rules" component={Rules}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </Router>
    );
    }
}

export default App;
