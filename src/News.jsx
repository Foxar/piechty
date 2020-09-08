import React from 'react';
import logo from './logo.svg';
import {Container, Typography, Button, Grow, Paper} from '@material-ui/core';

class News extends React.Component {
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
          <div className="News" >
              <Container>
                  <Container class="newsPanel">
                        <Container id="newsHeaderCont">
                            <Typography variant="h4">Pogoda dobija</Typography>
                            <Typography id="newsDate" variant="subtitle2">2 Lipca 2020</Typography>
                        </Container>
                      <Typography variant ="subtitle1">Ta pogoda to już mnie dobija 🤦‍♀️.... mam nadzieję że w sobotnie piechty będzie coś lepiej... No o 9 rano nie może być 30 stopni 😎😂👍</Typography>
                      <img class="newsPic" src="dog2.jpg"/>
                  </Container>
              </Container>
          </div>
        );
    }
}
export default News;
