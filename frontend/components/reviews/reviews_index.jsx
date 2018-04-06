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
      const { reviews, users, listing } = this.props;
      const sortedReviews = reviews.sort((review1, review2) => {
        if (review1.createdAt < review2.createdAt) {
          return 1
        } else {
          return -1
        }
      });

      return (
        <div>
          {
            sortedReviews.map(review => (
              <ReviewsIndexItem
                key={review.id}
                review={review}
                user={users[review.userId]}
                currentUser={this.props.currentUser}
                deleteReview={this.props.deleteReview}
              />
            ))
          }
        </div>
      )
    }
  }
}

export default withRouter(ReviewsIndex);
