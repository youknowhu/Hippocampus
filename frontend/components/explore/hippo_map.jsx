import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: { lat: 36.7855129, lng: -119.8646011},
  zoom: 7,
}

class HippoMap extends React.Component {
  constructor(props) {
    super(props);
    this.markers = [];
    this.geocoder = new google.maps.Geocoder();
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings,
      this.props.geolocation,
      this.props.mapBounds);
    this.orientMap();
  }

  componentDidUpdate() {
    this.filteredListings = this.applyFilters();
    this.MarkerManager.updateMarkers(this.filteredListings,
      this.props.geolocation,
      this.props.mapBounds)
    this.orientMap();
  }


  applyFilters() {
    const { listings, filters } = this.props;

    if (filters === undefined) {
      return listings;
    }

    const filteredListings = listings.filter(listing => {
      if (filters['pets'] && !listing.allowsPets) return;
      if (filters['camping'] && !listing.isCamping) return;
      if (filters['glamping'] && listing.isCamping) return;
      if (filters['group'] && listing.maxCapacity < 15) return;
      if (filters['private'] && !listing.isPrivate) return;
      if (filters['public'] && listing.isPrivate) return;
      if (filters.pricing < listing.dailyCost) return;

      return listing;
    });
    return filteredListings;
  }

  orientMap() {
    const { geolocation } = this.props;
    if (geolocation.length > 0) {
      const results = JSON.parse(window.localStorage.getItem(geolocation));
      if (!results) {
        this.geocoder.geocode({ 'address': geolocation},  (results, status) => {
          if (status === 'OK') {

            if (results[0]) {
              window.localStorage.setItem(geolocation, JSON.stringify(results));
              this.map.setZoom(8.5);
              this.map.setCenter(results[0].geometry.location);
              const mapBounds = this.map.getBounds();
              this.map.fitBounds(mapBounds);
              this.props.receiveMapBounds(this.map.getBounds());
              this.map.fitBounds(mapBounds);
            } else {
              window.alert('No results found');
            }
          }
        })
      }
    }
  }
  render() {
    const { listings } = this.props;

    if (Object.keys(listings) === 0 ) return ( <div> </div> )

    return (
      <div className="map-container">
        <div className="map" ref={map => this.mapNode = map }>
          MAP
        </div>
      </div>
    );
  }
}

export default HippoMap;
