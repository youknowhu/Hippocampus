import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ListingsIndexItem from './listings_index_item';
//Will need to pass edit and delete review methods to Review Index Item

class ListingsIndex extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchAllListings();
  }

  render() {
    const { listings } = this.props;
    console.log(this.props);
    console.log(listings);

    if (listings.length === 0) {
      return (
        <div> </div>
      )
    } else {

      return (
        <div className="listings-index">
          {
            listings.map(listing =>
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
