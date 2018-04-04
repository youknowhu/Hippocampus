import React from 'react'

class Listing extends React.Component {
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId)
    console.log(this.props)
  }

  render() {
    return (
      <main className="listing-page">
      </main >
    )
  }
}

export default Listing;
