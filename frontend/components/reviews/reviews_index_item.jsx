import React from 'react';
import DateFormat from 'dateformat';
import { Link } from 'react-router-dom';

class ReviewsIndexItem extends React.Component {

  render() {
    const { user, review } = this.props;
    const reviewDate = new Date(review.createdAt);
    const reviewDateFormatted = DateFormat('mmm dS, yyyy')

    return (
      <div className="reviews-index-item">
        <aside className="review-user">
          <img src={user.imgUrl}/>
        </aside>
        <main className="review-body">
          <h2>{user.firstName}</h2>
          <p className="date">
            {reviewDateFormatted}
          </p>
          <p>{review.body}</p>
          {
            this.props.currentUser.id === review.userId ?
            <div className="review-actions">
              <Link to={`/listings/${review.listingId}/reviews/${review.id}/edit`}>
                Edit Review
              </Link>
              <p> • </p>
              <button onClick={
                () => this.props.deleteReview(review.id)}>
                Delete Review
              </button>
            </div>
            :
            <div> </div>
          }
        </main>
      </div>
    )
  }
};

export default ReviewsIndexItem;
