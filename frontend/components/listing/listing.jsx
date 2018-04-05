import React from 'react';
import Slider from 'react-slick';

class Listing extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidMount() {
    console.log(`componentDidMount`);
    this.props.fetchListing(this.props.match.params.listingId)
  }

  photosSlider() {
    const settings = {
      slidesToShow: 3,
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
    console.log('render');
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
        </main >
      )
    }
  }
}

export default Listing;
