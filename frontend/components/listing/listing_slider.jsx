import React from 'react';
import Slider from 'react-slick';


class ListingSlider extends React.Component {

  render () {
    const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    variableWidth: true,
    className: 'custom-slider-css',
    responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: false,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            variableWidth: false,
          }
        },
      ]
    }

  return (
    <section className="listing-photos">
      <Slider {...settings}>
        {
          this.props.photos.map(photo => {
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
};

export default ListingSlider;
