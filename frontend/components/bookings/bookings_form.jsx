import React from 'react';
import { withRouter } from 'react-router-dom';


class BookingsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.booking;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createBooking(this.state)
      .then(() => thisprops.fetchSingleListing(this.state.listingId))
      .then(() => this.props.history.push(`/listings/${this.state.listingId}`));
  }


  render() {
    console.log(this.props)
    const { bookings, currentUser, listing, booking } = this.props;
<<<<<<< HEAD
    const dateSettings = {
      clickUnselectsDay: true,
      placeholder: "Select date",
      format: 'M/D/YYYY',
      formatDate: format,
      parseDate: parse
    }


=======
>>>>>>> parent of e4b3bfa... Download React DayPicker and DateFormat

    if (!listing) {
      return (<div> </div>)
    } else {
      return (
        <form className="booking-form">
          <div className='booking-header'>
            <h2>${listing.dailyCost}</h2>
            <button>Book Site</button>
          </div>
        </form>
      )
    }
  }
}

export default withRouter(BookingsForm);
