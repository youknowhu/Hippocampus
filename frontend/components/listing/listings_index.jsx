import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ListingsIndexItem from './listings_index_item';

class ListingsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.geocoder = new google.maps.Geocoder();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchAllListings();
  }

  applyFilters() {
    const { listings, filters, geolocation, mapBounds } = this.props;

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

    if (Object.keys(mapBounds).length > 0 && geolocation.length > 0) {
      console.log(filteredListings);
      console.log(mapBounds);

      filteredListings = filteredListings.filter(listing =>
        listing.lat > mapBounds.f.b &&
        listing.lat < mapBounds.f.f &&
        listing.lng > mapBounds.b.b &&
        listing.lng < mapBounds.b.f
      )
      console.log(filteredListings);
    }

    return filteredListings;
  }

  render() {
    const { listings, filters } = this.props;


    if (listings.length === 0) {
      return (
        <div></div>
      )
    } else {
      const filteredListings = this.applyFilters();
      const numListings =
          filteredListings.length ===  1 ?
          filteredListings.length + " Listing" :
          filteredListings.length + " Listings";
      return (
        <div className="listings-index">
          <p>
            <strong>
              {numListings}
            </strong>
          </p>
          {
            filteredListings.map(listing =>
              <ListingsIndexItem
                key={listing.id}
                listing={listing}
              />
            )
          }
        </div>
      )
    }
  }
}

export default withRouter(ListingsIndex);