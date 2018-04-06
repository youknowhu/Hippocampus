import React from 'react';
import { withRouter } from 'react-router-dom';

//import create review? or pass in via the container.

const currentUser = {
  id: 2,
  username: 'youknowhu',
  firstName: 'Kimmy',
  lastName: 'Allgeier',
  imgUrl: "http://res.cloudinary.com/deor0br3s/image/upload/v1522982253/blue_hippo_logo_-_gray_bg_2.svg"
}

class ReviewForm extends React.Component {
  render() {
    <div>
      <aside className="review-user">
        <img src={currentUser.imgUrl}/>
      </aside>
      <main className="review-body">
        <textarea
          placeholder="Have you stayed here? Leave a review for the Hippocampus community"
        />
        <button>Add Review</button>
      </main>
    </div>
  }
}

export default withRouter(ReviewForm);
