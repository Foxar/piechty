import React from 'react';
import logo from './logo.svg';
import {Container, Typography, Button, Grow, Paper, GridList, GridListTile} from '@material-ui/core';

class Gallery extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            tileData: [],
        };
        this.tileData = new Array();
        for(var i =1; i<=10;i++){
            var tempImg = new Image();
            tempImg.src = "dog" + i + ".jpg";
            var c = 1;
            console.log(tempImg);
            console.log(tempImg.width/tempImg.height);
            if(tempImg.width/tempImg.height>=1.25){
                c = 2;
            }else {
                c = 1;
            }
            this.tileData.push({img: "dog"+i+".jpg", cols: c});
        }
    }

    render() {

        if(this.tileData !== undefined){
            return (
              <div className="gallery" >
                  <Container class="galleryPanel">
                    <Typography variant="h4">Galeria</Typography>
                      <GridList cellHeight={300}  cols={3}>
                        {this.tileData.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                          <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                        ))}
                        </GridList>
                    </Container>
              </div>
            );
        }
        else {
            return(<div>asdf</div>);
        }
    }
}
export default Gallery;
