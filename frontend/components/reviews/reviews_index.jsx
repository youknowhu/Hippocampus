import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReviewsIndexItem from './reviews_index_item';
//Will need to pass edit and delete review methods to Review Index Item

class ReviewsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllUsers();
  }

  render() {
    if (Object.keys(this.props.users).length === 0) {
      return (
        <div> </div>
      )
    } else {
      const { reviews, sortedReviews, users, listing } = this.props;
      return (
        <div>
          {
            sortedReviews.map(reviewId =>
              <ReviewsIndexItem
                key={reviewId}
                review={reviews[reviewId]}
                user={users[reviews[reviewId].userId]}
                currentUser={this.props.currentUser}
                deleteReview={this.props.deleteReview} />
            )
          }
        </div>
      )
    }
  }
}

export default withRouter(ReviewsIndex);
