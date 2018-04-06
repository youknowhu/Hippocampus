import React from 'react';

const reviews = {
  5: {
    id: 5,
    userId: 2,
    listingId: 1,
    body: "I highly recommend doing the Grinnell glacier hike. We saw many wildlife along the way, including big horn sheep!",
    createdAt: "2018-04-05T19:29:04.898Z"
  },
  6: {
    id: 6,
    userId: 3,
    listingId: 1,
    body: "Wow, Going-to-the-Sun road was absolutely breathatking",
    createdAt: "2018-04-05T19:29:04.902Z"
  }
}

class ReviewsIndex extends React.Component {
  render() {
    return (
      <div>
        <h2> REVIEWS INDEX </h2>
      </div>
    )
  }
}

export default ReviewsIndex;
