import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import HippoMap from './hippo_map';
import ListingsFilterContainer from '../listing/listings_filter_container';
import ListingsIndexContainer from '../listing/listings_index_container';

class Explore extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="explore-container">
        <ListingsFilterContainer />
        <ListingsIndexContainer />
        <HippoMap
          listings={ this.props.listings }
          filters={ this.props.filters }
          geolocation={ this.props.geolocation }
        />
      </div>
    )
  }
}

export default Explore;
