import React from 'react';
import logo from './logo.svg';
import {Container, Typography, Button, Grow, Paper} from '@material-ui/core';

class App extends React.Component {
    constructor(props) {
    super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            Main2Visible: false,
    };
}



    isElementInViewport(e, acc = 0){
        if(e !== null)
        {
            var bounds = e.getBoundingClientRect();
            if( bounds.top >= 0 && bounds.left >= 0 &&
                (window.innerHeight || document.documentElement.clientHeight)- bounds.bottom >= acc &&
                (window.innerWidth || document.documentElement.clientWidth) - bounds.right >= acc)
                {
                    return true;
                }
        }
        return false;
    }

    handleScroll(e){
        console.log("scrolling");
        this.setState({
            Main2Visible: this.isElementInViewport(document.getElementById('Main2'), -5)
        });
        console.log(this.state);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }


    render() {
        const {Main2Visible} = this.state;
        console.log(this.isElementInViewport(document.getElementById('Main2')));
        return (
          <div className="App" >
              <Container id = "Main1" className = "mainSlide">
                  <Container id="title">
                      <Typography variant="h3">Piechty z psem</Typography>
                      <Typography variant ="subtitle1">Grupowe spacery z psami na śląsku i okolicach</Typography>
                  </Container>

                  <Button id="toDescBtn" variant="contained" onClick={()=>{document.getElementById('Main2').scrollIntoView({behavior: 'smooth'});}}>V</Button>
              </Container>

              <Container id = "Main2" className = "mainSlide">
                <Grow in={Main2Visible}>
                    <Paper id="desc" elevation={0} variant="outlined">
                        <Typography variant="subtitle1">asdfas asdfasfasdgadgfdfgzc</Typography>
                    </Paper>
                </Grow>
              </Container>

          </div>
        );
    }
}

export default App;
