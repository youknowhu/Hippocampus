import React from 'react';
import ListingSlider from './listing_slider.jsx'

class Listing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      elevation: 0,
      weather: null,
      temperature: null,
    }

    this.getElevation = this.getElevation.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.listing.id != newProps.match.params.listingId) {
      this.props.fetchListing(newProps.match.params.listingId)
        .then(() => this.getElevation()
      )
    }
  }


  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  getElevation() {
    const { listing } = this.props;
    const latlng = listing.lat.toString() + "," + listing.lng.toString();
    this.props.fetchElevation(latlng)
      .then(resp => this.setState({elevation: resp.results[0].elevation }));
  }

  render() {
    if (this.props.listing.id === undefined) {
      return (
        <div> </div>
      )
    } else {
      const { host, listing } = this.props;
      const listingType =
        listing.isPrivate ? 'Private' : 'Public';
      const accomodations =
        listing.isCamping ? 'Camping' : 'Glamping';
      const petFriendly =
        listing.allowsPets ? 'Yes' : 'No';

      return (
        <main className="listing-page">
          <ListingSlider photos={this.props.listingPhotos}/>
          <div className="listing-content">
            <section className="listing-left">
              <h1>{listing.title}</h1>

              <div className="listing-about">
                <aside>
                  <img src={host.imgUrl}/>
                  <div className="host-info">
                    <h3> Hosted by </h3>
                    <p>{host.firstName}</p>
                  </div>
                </aside>
                <main>
                  <p>{listing.body}</p>
                </main>
              </div>

              <div className="listing-details">
                <aside>
                  <p>Details</p>
                </aside>
                <main>
                  <ul>
                    <li>Listing Type:
                      <strong> {listingType}</strong>
                    </li>
                    <li>Accomodations:
                      <strong> {accomodations}</strong>
                    </li>
                    <li>Allows Pets:
                      <strong> {petFriendly}</strong>
                    </li>
                    <li>Max Capacity:
                      <strong> {listing.maxCapacity}</strong>
                    </li>
                    <li>Check In After:
                      <strong> {listing.checkInAfter}</strong>
                    </li>
                    <li>Check Out Before:
                      <strong> {listing.checkOutBefore}</strong>
                    </li>
                    <li>Daily Cost:
                      <strong> ${listing.dailyCost}</strong>
                    </li>
                  </ul>
                </main>
              </div>
              <div className="listing-vibe">
                <h2> The vibe at {listing.title} </h2>
                <div className='vibe-squares'>
                  <div className="vibe-square">
                    <h3>{Math.round(this.state.elevation)}ft</h3>
                    <p>Listing's Elevation</p>
                  </div>
                  <div className="vibe-square">
                    <h3>{Math.round(this.state.elevation)}ft</h3>
                    <p>Listing's Elevation</p>
                  </div>
                  <div className="vibe-square">
                    <h3>{Math.round(this.state.elevation)}ft</h3>
                    <p>Listing's Elevation</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="listing-right">
            </section>
          </div>
        </main >
      )
    }
  }
}

export default Listing;
