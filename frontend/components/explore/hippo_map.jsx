import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: { lat: 36.7855129, lng: -119.8646011},
  zoom: 7,
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

    if (filters['private'] === true) {
      filteredListings = filteredListings.filter(listing => listing.isPrivate === true)
    }

    if (filters['public'] === true) {
      filteredListings = filteredListings.filter(listing => listing.isPrivate === false)
    }

    filteredListings = filteredListings.filter(listing => listing.dailyCost < filters.pricing)
    return filteredListings;
  }

  addListings() {
    this.clearMarkers();
    const filteredListings = this.applyFilters();
    console.log(filteredListings)
    const icon = 'http://res.cloudinary.com/deor0br3s/image/upload/c_scale,w_100/v1523399623/Hippo_Marker_3.png'

    filteredListings.forEach(listing => {
      const listingPos = { lat: listing.lat, lng: listing.lng};

      const marker = new google.maps.Marker({
        position: listingPos,
        map: this.map,
        title: listing.title,
        icon: icon,
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
