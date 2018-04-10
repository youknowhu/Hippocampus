import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ListingsIndexItem from './listings_index_item';
//Will need to pass edit and delete review methods to Review Index Item

class ListingsIndex extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchAllListings();
  }

  applyFilters() {
    const { listings, filters } = this.props;
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

  render() {
    const { listings, filters } = this.props;


    if (listings.length === 0) {
      return (
        <div> </div>
      )
    } else {
      const filteredListings = this.applyFilters();
      return (
        <div className="listings-index">
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
