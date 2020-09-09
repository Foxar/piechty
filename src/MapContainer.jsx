import React from 'react';
import HPlatform, { HMap, HMapMarker } from "react-here-map";




class MapContainer extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            Cwidth: props.Cwidth,
            Cheight: props.Cheight,
            Slat: props.lat,
            Slon: props.lng
        };
    }
  render() {
    const {Cwidth, Cheight, Slat, Slon} = this.state;
    const point = { lat: Slat, lng: Slon };
    console.log(Cwidth);
    return (
    <div className="mapCont">
    <HPlatform
    app_id="jchPxM4oto5pV2AFfsWo"

    apikey={"Rpq_sbapZT0wwe7glDsSgQE_f83-ITfbvpFiqImf_j4"}
    useCIT
    useHTTPS
    includeUI
    includePlaces
    >
        <HMap
        style={{
        height: Cheight,
        width: Cwidth,
        }}
        mapOptions={{ center: { lat: Slat, lng: Slon }, zoom: 12 }}
        >
            <HMapMarker coords={point} />
        </HMap>
    </HPlatform>
    </div>

    );
  }
}

export default MapContainer;
