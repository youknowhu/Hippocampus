import React from 'react';
import { withRouter } from 'react-router-dom';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import format from 'date-fns/format';
import parse from 'date-fns/parse';



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
    const { bookings, currentUser, listing, booking } = this.props;
    const dateSettings = {
      clickUnselectsDay: true,
      placeholder: "Select date",
      format: 'M/D/YYYY',
      formatDate: format,
      parseDate: parse
    }



    if (!listing) {
      return (<div> </div>)
    } else {
      return (
        <form className="booking-form" onSubmit={this.handleSubmit}>
          <div className="booking-header">
            <h2>${listing.dailyCost}</h2>
            <button>Book Site</button>
          </div>
          <div className="booking-params">
              <DayPickerInput {...dateSettings} />
          </div>
        </form>
      )
    }
  }
}

export default withRouter(BookingsForm);
