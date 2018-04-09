import React from 'react';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435},
  zoom: 5.5,
}


class HippoMap extends React.Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      <div className="map" ref={map => this.mapNode = map }>
        MAP
      </div>
    )
  }
}
export default HippoMap;
