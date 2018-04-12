// import { withRouter } from 'react-router-dom';

class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.markers = {};
    this.geocoder = new google.maps.Geocoder();
  }

  clearMarkers(listingsObj) {
    Object.keys(this.markers)
      .filter(listingId => !listingsObj[listingId])
      .forEach((listingId) => this.removeMarker(this.markers[listingId]))
  }

  updateMarkers(listings, geolocation, mapBounds){
    const listingsObj = {};

    this.clearMarkers(listingsObj)
    this.bounds = new google.maps.LatLngBounds();

    listings.forEach(listing => listingsObj[listing.id] = listing);

    listings
      .filter(listing => !this.markers[listing.id])
      .forEach(newListing => this.createMarkerFromListing(newListing))

    if (geolocation.length > 0) {
      return
    } else if (listings.length === 1) {
      this.map.setZoom(7);
      this.map.setCenter({lat: listings[0].lat, lng: listings[0].lng });
    } else if (listings.length > 0) {
      this.map.fitBounds(this.bounds);
    }
  }

  createMarkerFromListing(listing) {
    const icon = 'http://res.cloudinary.com/deor0br3s/image/upload/c_scale,w_100/v1523399623/Hippo_Marker_3.png'
    const position = new google.maps.LatLng(listing.lat, listing.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      listingId: listing.id,
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

    marker.addListener('mouseover', () => {
      infowindow.open(this.map, marker)
    });

    marker.addListener('mouseout', () => {
      infowindow.close(this.map, marker)
    });

    marker.addListener('click', () => {
      s
    });


    this.markers[marker.listingId] = marker;
    this.bounds.extend(marker.getPosition());
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }

}

export default MarkerManager;
