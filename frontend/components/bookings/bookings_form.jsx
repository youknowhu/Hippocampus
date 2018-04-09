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
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleStep = this.handleStep.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleDayChange(dateParam) {
    return day => {
      this.setState({ [dateParam]: day });
    };
  }

  handleStep(stepParam) {
    return e => {
      if (stepParam === '+' && (this.state.numGuests + 1 <= this.props.listing.maxCapacity)) {
        this.setState({ numGuests: (this.state.numGuests + 1) })
      } else if (stepParam === '-' && (this.state.numGuests - 1 >= 1)) {
        this.setState({ numGuests: (this.state.numGuests - 1) })
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createBooking(this.state)
      .then(() => thisprops.fetchSingleListing(this.state.listingId))
      .then(() => this.props.history.push(`/listings/${this.state.listingId}`));
  }


  render() {
    console.log(this.state)
    const { bookings, currentUser, listing, booking } = this.props;
    const dateSettings = {
      clickUnselectsDay: true,
      placeholder: "Select date",
      format: 'M/D/YYYY',
      formatDate: format,
      parseDate: parse,
    }


    if (!listing) {
      return (<div> </div>)
    } else {
      const numDays = (this.state.endDate - this.state.startDate)/1000/60/60/24

      return (
        <form className="booking-form" onSubmit={this.handleSubmit}>
          <div className='booking-header'>
            <h2>${listing.dailyCost}</h2>
            <button>Book Site</button>
          </div>
          <div className="booking-selections">
            <div className="booking-field">
              <h3>Check In</h3>
              <DayPickerInput
                {...dateSettings}
                value={this.state.startDate}
                onDayChange={this.handleDayChange('startDate')}
                />
            </div>
            <div className="booking-field">
              <h3>Check Out</h3>
              <DayPickerInput
                {...dateSettings}
                value={this.state.endDate}
                onDayChange={this.handleDayChange('endDate')}
              />
            </div>
            <div className="booking-field">
              <h3>Guests</h3>
              <div className="booking-guests">
                <button onClick={this.handleStep('-')}> - </button>
                  <p> {this.state.numGuests} </p>
                <button onClick={this.handleStep('+')}> + </button>
              </div>
            </div>
          </div>
          {
            (this.state.startDate && this.state.endDate) ?
            <div className="booking-total">
              <h3>Total</h3>
              <div className="booking-total-calc">
                <p> ${listing.dailyCost} x {numDays} night(s)</p>
                <p> ${listing.dailyCost * numDays}</p>
              </div>
            </div>
            :
            <div> </div>
          }
        </form>
      )
    }
  }
}

export default withRouter(BookingsForm);
