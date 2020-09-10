import React from 'react';
import logo from './logo.svg';
import {Container, Typography, Button, Grow, Paper} from '@material-ui/core';

class Rules extends React.Component {
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
                        <Typography variant="h4">Zasady piecht</Typography>
                    </Container>
                    <Typography variant ="subtitle1">
                        <ol>
                            <li>Każdy psiak biorący udział w wydarzeniu ma ważne szczepienie przeciwko wściekliźnie.</li>
                            <li>Podczas spaceru prowadzimy psy na smyczach.</li>
                            <li>Będziemy robić zdjęcia, które będą opublikowane w mediach społecznościowych. Akceptując regulamin, wyrażacie zgodę na zdjęcia i ich publikację.</li>
                            <li>Pamiętajcie, aby sprzątać po swoich psach! Nie zapomnijcie o woreczkach.</li>
                            <li>Nie przeszkadzamy sobie nawzajem - nie naruszajmy przestrzeni innych psów, ani ich właścicieli, jeśli sobie tego nie życzą.</li>
                            <li>Nie zapomnijcie o wodzie dla piesków.</li>
                            <li>Zadawanie pytań o nasze psiaki bardzo wskazane 😉.</li>
                        </ol>
                    </Typography>
                  </Container>
              </Container>
          </div>
        );
    }
}
export default Rules;
