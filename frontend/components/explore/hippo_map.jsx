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
    this.addListings();
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  clearMarkers() {
    this.markers.forEach(marker =>
      marker.setMap(null)
    )
  }

  //ui geolocation
  handleEnter() {
    return e => {
      if (e.charCode == '13') {
        const geolocation = this.state.searchInput;

        if (geolocation.length > 3) {
          this.geocoder.geocode({ 'address': geolocation}, (results, status) => {
            if (status === 'OK') {
              if (results[0]) {
                this.map.setZoom(6.5);
                this.map.setCenter(results[0].geometry.location);
                console.log(this.map.getBounds())
              } else {
                window.alert('No results found');
              }
            } else {
              window.alert('Geocoder failed due to: ' + status);
            }
          });
        }
      }
    }
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
    const icon = 'http://res.cloudinary.com/deor0br3s/image/upload/c_scale,w_100/v1523399623/Hippo_Marker_3.png'
    const bounds = new google.maps.LatLngBounds();

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
            font-size: 20px;
            text-align: center;
            color: #333333;
            padding-bottom: 7px;"> ${listing.title} </h2>
          <img className="infowindow-image"
            style="width: 250px;
            height: 250px;"
            src="${listing.iconUrl}"/>
          <p style="
          text-align: center;
          font-size: 14px;
          color: #777777;
          padding-top: 7px;">$${listing.dailyCost}/night</p>
        </div>`,
        maxWidth: 400,
      });

      bounds.extend(marker.getPosition());

      marker.addListener('mouseover', () => {
        infowindow.open(this.map, marker)
      });

      marker.addListener('mouseout', () => {
        infowindow.close(this.map, marker)
      });

      marker.addListener('click', () => {
        this.map.setZoom(6);
        this.map.setCenter(marker.getPosition());
      });

      this.markers.push(marker);
    })

    if (this.props.geolocation.length > 0) {
      this.geocoder.geocode({ 'address': this.props.geolocation}, (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            this.map.setZoom(8);
            this.map.setCenter(results[0].geometry.location);
            console.log(this.map.getBounds())
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    } else if (filteredListings.length > 0) {
      this.map.fitBounds(bounds);
    }

  }



  render() {
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
