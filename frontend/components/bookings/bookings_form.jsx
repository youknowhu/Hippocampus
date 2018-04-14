import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import DayPicker from 'react-day-picker';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import DateFormat from 'dateformat';
import merge from 'lodash/merge';



class BookingsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numGuests: 1,
      checkIn: '',
      checkOut: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleStep = this.handleStep.bind(this);
    this.renderStickyForm = this.renderStickyForm.bind(this);
    this.bookingRef = React.createRef();
    this.showLogin = this.showLogin.bind(this);

  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  showLogin() {
    this.props.loadModal('login');
  }

  handleDayChange(dateParam) {
    return day => {
      this.setState({ [dateParam]: day });
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.renderStickyForm);
    const bookingForm = this.bookingRef.current;
    const domRect = bookingForm.getBoundingClientRect();
    this.stickyPos = domRect.y < 0 ? 400 : domRect.y - 70;

    if (this.props.searchDates) {
      this.setState({ checkIn: this.props.searchDates.checkIn })
      this.setState({ checkOut: this.props.searchDates.checkOut })
    }

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.renderStickyForm)
    this.props.clearBookingErrors();
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

  renderStickyForm() {
    const bookingForm = this.bookingRef.current;

    if (window.pageYOffset >= this.stickyPos) {
      bookingForm.classList.add('sticky')
    } else {
      bookingForm.classList.remove('sticky')
    }
  }

  renderErrors() {
    return(
      <ul className="booking-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const { currentUser, listing } = this.props;
    this.state.listingId = listing.id;
    this.state.guestId = currentUser.id;

    this.props.createBooking(this.state)
      .then(() => this.props.clearBookingErrors())
      .then(() => this.props.fetchSingleListing(this.state.listingId));
  }


  render() {
    const { bookings, currentUser, listing, currentUserBookings } = this.props;
    const dateSettings = {
      clickUnselectsDay: true,
      placeholder: "Select date",
      format: 'M/D/YYYY',
      formatDate: format,
      parseDate: parse,
      dayPickerProps:{ disabledDays: {before: new Date(Date.now() + 86400000)}}
    }


    if (!listing) {
      return (<div> </div>)
    } else if ( Object.keys(currentUser).length === 0 ) { //user logged out
      return (
        <div onScroll={ ()=> this.renderStickyForm} id="booking-form" ref={this.bookingRef}>
          <div className='booking-header'>
            <h2>${listing.dailyCost}</h2>
            <button onClick={this.showLogin}>Log In To Book</button>
          </div>
        </div>
      )
    } else if (currentUserBookings !==  null ) {
      const checkinFormatted = DateFormat(currentUserBookings.check_in, 'UTC:m/d/yyyy')
      const checkoutFormatted = DateFormat(currentUserBookings.check_out,'UTC:m/d/yyyy')
      const numDays = (new Date(checkoutFormatted) - new Date(checkinFormatted))/1000/24/60/60
      const resDays =
          numDays ===  1 ? numDays + " night" : numDays + " nights";


      return (
        <div id="booking-form" ref={this.bookingRef} onScroll={() => this.renderStickyForm} >
          <div className='booked-header'>
            <button>Reservation Booked</button>
          </div>
          <div className="booking-selections">
            <div className="booking-field-date">
              <h3>Check In</h3>
              <p className="booked-field">{checkinFormatted}</p>
            </div>
            <div className="booking-field-date">
              <h3>Check Out</h3>
              <p className="booked-field">{checkoutFormatted}</p>
            </div>
            <div className="booking-field-guests">
              <h3>Guests</h3>
              <p className="booked-guests">{currentUserBookings.num_guests}</p>
            </div>
          </div>
          <div className="booking-total-shown">
            <h3>Total</h3>
              <div className="booking-total-calc">
                <p> ${listing.dailyCost} x {resDays}</p>
                <h3> ${listing.dailyCost * numDays}</h3>
              </div>
          </div>
          <div className="booking-cancel">
            <a onClick={() =>
              this.props.deleteBooking(currentUserBookings.id)
              .then(() => this.props.fetchSingleListing(listing.id))
            }>
              Cancel Reservation
            </a>
          </div>
        </div>
      )
    } else {
      const numDays = (this.state.checkOut - this.state.checkIn)/1000/60/60/24

      const resDays =
          numDays ===  1 ? numDays + " night" : numDays + " nights";

      const startModifier = {
        selectedStart: this.state.checkIn,
      }

      const endModifier = {
        selectedEnd: this.state.checkOut,
      }

      return (
        <form id="booking-form" ref={this.bookingRef}
        onSubmit={this.handleSubmit} onScroll={ () => this.renderStickyForm} >
          <div className='booking-header'>
            <h2>${listing.dailyCost}</h2>
            <button onClick={this.handleSubmit}>Book Site</button>
          </div>
          <div className="booking-selections">
            <div className="booking-field-date">
              <h3>Check In</h3>
              <DayPickerInput
                {...dateSettings}
                value={this.state.checkIn}
                onDayChange={this.handleDayChange('checkIn')}
                dayPickerProps={ {
                  disabledDays: [
                    { before: new Date(Date.now() + 86400000) },
                    { after: new Date(this.state.checkOut) }],
                  selectedDays: this.state.checkOut,
                }}
                />
            </div>
            <div className="booking-field-date">
              <h3>Check Out</h3>
              <DayPickerInput
                {...dateSettings}
                value={this.state.checkOut}
                onDayChange={this.handleDayChange('checkOut')}
                dayPickerProps={ {
                  disabledDays:
                    { before: new Date(this.state.checkIn) },
                  selectedDays: this.state.checkIn,
                }}
              />
            </div>
            <div className="booking-field-guests">
              <h3>Guests</h3>
              <div className="booking-guests">
                <a onClick={this.handleStep('-')}> - </a>
                  <p> {this.state.numGuests} </p>
                <a onClick={this.handleStep('+')}> + </a>
              </div>
            </div>
          </div>
          <div className="booking-total">
          {
            (this.state.checkIn && this.state.checkOut && numDays >= 1) ?
            <div className="booking-total-shown">
              <h3>Total</h3>
                <div className="booking-total-calc">
                  <p> ${listing.dailyCost} x {resDays}</p>
                  <h3> ${listing.dailyCost * numDays}</h3>
                </div>
            </div>
            :
            <div> </div>
          }
          {
            (this.props.errors.length > 0) ?
              this.renderErrors() :  <div> </div>
          }
          </div>
        </form>
      )
    }
  }
}

export default withRouter(BookingsForm);
