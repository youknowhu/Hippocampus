import React from 'react';
import DateFormat from 'dateformat';
// need to add an edit or delete button

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
        </main>
      </div>
    )
  }
};

export default ReviewsIndexItem;
