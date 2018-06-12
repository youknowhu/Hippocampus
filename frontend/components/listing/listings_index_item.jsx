import React from 'react';
import { Link } from 'react-router-dom'

class ListingsIndexItem extends React.Component {
  render() {
    const { listing } = this.props;

    return (
      <div className="listings-index-item" id={`listing-${listing.id}`}>
        <Link className='listings-index-link' to={`listings/${listing.id}`}>
          <aside className="listings-index-img">
            <img src={listing.iconUrl} />
          </aside>
          <main className="listings-index-body">
            <h2>{listing.title}</h2>
            <p>{listing.body}</p>
            <div className="listings-index-booking">
              <button>Book</button>
              <h4>${listing.dailyCost}/night</h4>
            </div>
          </main>
        </Link>
      </div>
    )
  }
}

export default ListingsIndexItem;
