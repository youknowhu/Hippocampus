import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReviewsIndexItem from './reviews_index_item';
//Will need to pass edit and delete review methods to Review Index Item

class ReviewsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllUsers();
  }

  render() {
    console.log('render');
    console.log(this.props);
    if (Object.keys(this.props.users).length === 0) {
      return (
        <div> </div>
      )
    } else {

      const { reviews, users, listing } = this.props;

      return (
        <div className="reviews-index">
          <div className="reviews-header">
            <p>
              <strong>{reviews.length} Reviews</strong>
            </p>
            <span>
              <Link to={`/listings/1/reviews/new`}>Add Review</Link>
            </span>
          </div>

          {
            reviews.map(review => (
              <ReviewsIndexItem
                key={review.id}
                review={review}
                user={users[review.userId]}
              />
            ))
          }
        </div>
      )
    }
  }
}

export default withRouter(ReviewsIndex);
