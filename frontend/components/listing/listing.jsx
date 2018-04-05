import React from 'react';
import Slider from 'react-slick';

class Listing extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.listing.id != newProps.match.params.listingId) {
      this.props.fetchListing(newProps.match.params.listingId)
    }
  }


  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId)
  }

  photosSlider() {
    const settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: true,
      variableWidth: true,
    }

    return (
      <section className="listing-photos">
        <Slider {...settings}>
          {
            this.props.listingPhotos.map(photo => {
              return (
                <div key={photo.id}>
                  <img src={photo.imgUrl} />
                </div>
              )
            })
          }
        </Slider>
      </section>
    )
  }

  render() {
    console.log(this.props);

    if (this.props.listing === undefined) {
      return (
        <div> </div>
      )
    } else {
      return (
        <main className="listing-page">
          {
            this.photosSlider()
          }
          <div className="listing-content">
            <section className="listing-left">
              <h1>{this.props.listing.title}</h1>

              <div className="listing-about">
                <aside>
                  <img src={this.props.host.imgUrl}/>
                  <div className="host-info">
                    <h3> Hosted by </h3>
                    <p>{this.props.host.firstName}</p>
                  </div>
                </aside>
                <main>
                  <p>{this.props.listing.body}</p>
                </main>
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
