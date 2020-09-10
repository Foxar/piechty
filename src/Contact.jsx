import React from 'react';
import logo from './logo.svg';
import {Container, Typography, Button, Grow, Paper} from '@material-ui/core';

class Contact extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
        };
    }
    componentDidMount(){
    }
    render() {
        const {} = this.state;
        return (
          <div className="Rule" >
              <Container>
                  <Container class="rulesPanel">
                    <Container id="rulesHeaderCont">
                        <Typography variant="h4">Kontakt</Typography>
                    </Container>
                    <Typography variant ="subtitle1">
                        <ul>
                        <li>Email: piechtyzpsem@gmail.com</li>
                        </ul>
                    </Typography>
                  </Container>
              </Container>
          </div>
        );
    }
}
export default Contact;
