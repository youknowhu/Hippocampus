import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435},
  zoom: 5.5,
}


class HippoMap extends React.Component {
  constructor(props) {
    super(props);
    this.markers = [];
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  componentDidUpdate() {
    this.addListings();
  }

  clearMarkers() {
    this.markers.forEach(marker =>
      marker.setMap(null)
    )
  }

  applyFilters() {
    const { listings, filters } = this.props;

    if (filters === undefined) {
      return listings;
    }

    let filteredListings = listings;

    if (filters['pets'] === true) {
      filteredListings = filteredListings.filter(listing => listing.allowsPets === true)
    }

    if (filters['camping'] === true) {
      filteredListings = filteredListings.filter(listing => listing.isCamping === true)
    }

    if (filters['glamping'] === true) {
      filteredListings = filteredListings.filter(listing => listing.isCamping === false)
    }

    if (filters['group'] === true) {
      filteredListings = filteredListings.filter(listing => listing.maxCapacity >= 15)
    }

    filteredListings = filteredListings.filter(listing => listing.dailyCost < filters.pricing)
    return filteredListings;
  }

  addListings() {
    this.clearMarkers();
    const filteredListings = this.applyFilters();
    console.log(filteredListings)

    filteredListings.forEach(listing => {
      const listingPos = { lat: listing.lat, lng: listing.lng};

      const marker = new google.maps.Marker({
        position: listingPos,
        map: this.map,
        title: listing.title,
      })

      this.markers.push(marker);
    })
  }

  render() {
    const { listings, filters } = this.props;
    return (
      <div className="map" ref={map => this.mapNode = map }>
        MAP
      </div>
    )
  }
}

export default HippoMap;
