import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: { lat: 36.7855129, lng: -119.8646011},
  zoom: 8,
}


class HippoMap extends React.Component {
  constructor(props) {
    super(props);
    this.markers = [];
    this.state = {
      searchInput: '',
    }

    this.geocoder = new google.maps.Geocoder();
  }

  componentDidUpdate() {
    this.addListingMarkers();
    this.orientMap();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps != this.props) {
  //     this.addListingMarkers();
  //     this.orientMap();
  //   }
  // }

  componentDidMount() {
    console.log('component mounted');
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  clearMarkers() {
    this.markers.forEach(marker =>
      marker.setMap(null)
    )
  }

  applyFilters() {
    console.log('apply filters');
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

  addListingMarkers() {
    console.log('adding listing markers');
    this.clearMarkers();
    this.filteredListings = this.applyFilters();
    const icon = 'http://res.cloudinary.com/deor0br3s/image/upload/c_scale,w_100/v1523399623/Hippo_Marker_3.png'
    this.bounds = new google.maps.LatLngBounds();

    filteredListings.forEach(listing => {
      const listingPos = { lat: listing.lat, lng: listing.lng};

      const marker = new google.maps.Marker({
        position: listingPos,
        map: this.map,
        title: listing.title,
        icon: icon,
      });

      const infowindow = new google.maps.InfoWindow({
        content:
        `<div className="infowindow"
          style="padding-left: 20px;"
          >
          <h2 className="infowindow-title"
            style="font-weight: bold;
            font-size: 14px;
            text-align: center;
            color: #777777;
            padding-top: 5px;
            "> ${listing.title} </h2>

        </div>`,
        maxWidth: 400,
      });

      this.bounds.extend(marker.getPosition());

      marker.addListener('mouseover', () => {
        infowindow.open(this.map, marker)
      });

      marker.addListener('mouseout', () => {
        infowindow.close(this.map, marker)
      });

      // marker.addListener('click', () => {
      //   this.map.setZoom(6);
      //   this.map.setCenter(marker.getPosition());
      // });

      this.markers.push(marker);
    })



  }

  orientMap() {
    console.log('orient map');

    const { geolocation } = this.props;

    if (!window.localStorage.getItem(geolocation) && geolocation.length > 0) {
      this.geocoder.geocode({ 'address': geolocation},  (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            window.localStorage.setItem(geolocation, JSON.stringify(results))
            this.map.setZoom(8);
            this.map.setCenter(results[0].geometry.location);
            this.props.receiveMapBounds(this.map.getBounds());
          } else {
            window.alert('No results found');
          }
        }  else {
          window.alert('Geocoder failed due to: ' + status);
        }
      })
    } else if (this.props.listings.length > 0) {
      this.map.fitBounds(this.bounds);
    }
  }



  render() {
    console.log('render');
    const { listings, filters } = this.props;
    return (
      <div className="map-container">
        <div className="map" ref={map => this.mapNode = map }>
          MAP
        </div>
      </div>
    )
  }
}

export default HippoMap;
