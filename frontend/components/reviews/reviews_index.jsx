import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReviewsIndexItem from './reviews_index_item';
//Will need to pass edit and delete review methods to Review Index Item

const reviews = [
  {
    id: 5,
    userId: 2,
    listingId: 1,
    body: "I highly recommend doing the Grinnell glacier hike. We saw many wildlife along the way, including big horn sheep!",
    createdAt: "2018-04-05T19:29:04.898Z"
  },
  {
    id: 6,
    userId: 3,
    listingId: 1,
    body: "Wow, Going-to-the-Sun road was absolutely breathtaking",
    createdAt: "2018-04-05T19:29:04.902Z"
  }
]

const users = {
  2: {
    id: 2,
    username: 'youknowhu',
    firstName: 'Kimmy',
    lastName: 'Allgeier',
    imgUrl: "http://res.cloudinary.com/deor0br3s/image/upload/v1522982253/blue_hippo_logo_-_gray_bg_2.svg"
  },
  3: {
    id: 3,
    username: "sillysally",
    firstName: "Sally",
    lastName: "Smith",
    imgUrl: "http://res.cloudinary.com/deor0br3s/image/upload/v1522982253/blue_hippo_logo_-_gray_bg_2.svg"
  }
}

class ReviewsIndex extends React.Component {
  render() {
    const { listing } = this.props;

    return (
      <div className="reviews-index">
        <div className="reviews-header">
          <p>
            <strong>{reviews.length} Reviews</strong>
          </p>
          <span>
            <Link to={`/listings/${listing.id}/reviews/new`}>Add Review</Link>
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

export default withRouter(ReviewsIndex);
