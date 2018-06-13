import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router-dom';
import { receiveGeolocationEntry } from '../../actions/geolocation_actions';

import HippoMap from './hippo_map';
import ListingsFilterContainer from '../listing/listings_filter_container';
import ListingsIndex from '../listing/listings_index';

class Explore extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0,0);
    this.props.fetchAllListings();
  }

  componentWillUnmount() {
    this.props.receiveGeolocationEntry('');
  }

  render() {
    return (
      <div className="explore-container">
        <ListingsFilterContainer />
        <ListingsIndex
          listings={ this.props.listings }
          filters={ this.props.filters }
          geolocation={ this.props.geolocation }
          mapBounds={ this.props.mapBounds }
        />
        <HippoMap
          listings={ this.props.listings }
          filters={ this.props.filters }
          geolocation={ this.props.geolocation }
          receiveMapBounds={ this.props.receiveMapBounds }
          mapBounds={ this.props.mapBounds }
        />
      </div>
    )
  }
}

export default Explore;
