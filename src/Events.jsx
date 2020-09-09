import React from 'react';
import logo from './logo.svg';
import {Container, Typography, Button, Grow, Paper, GridList, GridListTile} from '@material-ui/core';
import MapContainer from './MapContainer';

class Events extends React.Component {
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
          <div className="Events" >
              <Container>
                  <Container class="eventsPanel">
                        <Container id="eventsHeaderCont">
                            <Typography variant="h4">Urodzinowe piechty</Typography>
                            <Typography id="eventsDate" variant="subtitle2">6 Września 2020</Typography>
                        </Container>
                        <img className="eventsPic" src="event1.jpg"/>
                        <Container id="eventDesc" class="eventDesc">
                        <Typography variant ="subtitle1"><p>Hej kochani 🙂</p><p>
                        Już 6 września spotkamy się na urodzinowym spacerku, który odbędzie się tam gdzie wszystko się zaczęło czyli w Parku Gródek w Jaworznie . Jest nam niezmiernie miło że już rok wspólnie sobie piechtujemy 😃 Mamy nadzieje że niespodzianka którą Wam szykujemy spodoba się 🙂 więcej informacji już niebawem.</p>
                        Pozdrawiamy
                        <p>Magda i Michał</p>
                        </Typography>
                        <MapContainer parentClass="eventsPanel" Cwidth="100%" Cheight="400px" lat="50.226877" lng="19.314471"/>
                        </Container>
                  </Container>
              </Container>
          </div>
        );

    }
}
export default Events;
