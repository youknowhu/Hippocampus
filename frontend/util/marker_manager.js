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

    this.clearMarkers(listingsObj);
    this.bounds = new google.maps.LatLngBounds();

    listings.forEach(listing => listingsObj[listing.id] = listing);

    listings
      .filter(listing => !this.markers[listing.id])
      .forEach(newListing => this.createMarkerFromListing(newListing));

    //if user entered geolocation, map will be centered around geolocation.
    if (geolocation.length > 0) {
      return;

    //if exactly one listing, center and set zoom around single location.
    } else if (listings.length === 1) {
      this.map.setZoom(7);
      this.map.setCenter({lat: listings[0].lat, lng: listings[0].lng });

    //otherwise, reframe map around bounds set by all markers placed on the map.
    } else if (listings.length > 0) {
      this.map.fitBounds(this.bounds);
    }
  }

  createMarkerFromListing(listing) {
    const icon = 'https://res.cloudinary.com/deor0br3s/image/upload/c_scale,w_100/v1523399623/Hippo_Marker_3.png'
    const position = new google.maps.LatLng(listing.lat, listing.lng);
    const markerInfoWindow = new google.maps.InfoWindow({
      content:
      `<div class="infowindow">
        <a href="/#/listings/${listing.id}" style="display: flex;">
          <img class="infowindow-image" src="${listing.iconUrl}"/>
          <div>
            <h2 class="infowindow-title"> ${listing.title} </h2>
            <p>$${listing.dailyCost}/night</p>
          </div>
        </a>
      </div>`,
      maxWidth: 300,
    });

    const marker = new google.maps.Marker({
      position,
      map: this.map,
      listingId: listing.id,
      icon: icon,
      clicked: false,
      infoWindow: markerInfoWindow,
    });

    marker.addListener('mouseover', () => {
      marker.infoWindow.open(this.map, marker);
    });

    marker.addListener('mouseout', () => {
      if (!marker.clicked) marker.infoWindow.close(this.map, marker);
    });

    marker.addListener('click', () => {
      marker.clicked = !marker.clicked;
      if (marker.clicked) {
        this.hideAllInfoWindows();
        marker.infoWindow.open(this.map, marker);
        const targetListing = document.getElementById(`listing-${listing.id}`);
        targetListing.scrollIntoView({behavior: "smooth", block: "center"});
      } else {
        marker.infoWindow.close(this.map, marker);
      }
    });


    this.markers[marker.listingId] = marker;
    this.bounds.extend(marker.getPosition());
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }

  hideAllInfoWindows() {
    Object.values(this.markers).forEach(marker => {
      marker.infoWindow.close(this.map, marker);
    });
  }

}

export default MarkerManager;
