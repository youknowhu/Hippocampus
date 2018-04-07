import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.review;
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.props.fetchSingleListing(this.state.listingId))
      .then(() => this.props.history.push(`/listings/${this.state.listingId}`));
  }

  render() {
    const { currentUser, formType } = this.props;

    if (!this.props.currentUser) {

      return (<div> </div>)
    } else {

      return (
        <div className="review-form">
          <aside className="review-user">
            <img src={currentUser.imgUrl}/>
            <p>{currentUser.firstName}</p>
          </aside>
          <main className="review-body">
            <form onSubmit={this.handleSubmit}>
              <textarea
                onChange={this.update('body')}
                value={this.state.body}
                placeholder="Have you stayed here? Leave a review for the Hippocampus community."
                required
              />
              <div className="review-form-actions">
                <Link to={`/listings/${this.state.listingId}`} >Cancel</Link>
                <button>{formType}</button>
              </div>
            </form>
          </main>
        </div>
      )
    }
  }
}

export default withRouter(ReviewForm);
