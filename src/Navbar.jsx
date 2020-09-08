import React from 'react';
import {ButtonGroup, Container, Button} from '@material-ui/core';
import {BrowserRouter as Router, Link} from "react-router-dom";
import './index.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
            this.state = {

            };
    }
    render(){
        return(
            <Router forceRefresh={true}>
                <Container id="navbar" maxWidth='xl'>
                    <ButtonGroup id="navBtnGroup" size='large' variant="text"
                    color="primary" aria-label="text primary button group">
                        <Button component={Link} to="/">O nas</Button>
                        <Button component={Link} to="/news">Nowości</Button>
                        <Button component={Link} to="/gallery">Galeria</Button>
                        <Button component={Link} to="/news">Wydarzenia</Button>
                        <Button component={Link} to="/news">Zasady</Button>
                        <Button component={Link} to="/news">Kontakt</Button>
                    </ButtonGroup>
                </Container>
            </Router>
        );
    }
}

export default Navbar;
