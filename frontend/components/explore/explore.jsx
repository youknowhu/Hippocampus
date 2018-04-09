import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import HippoMap from './hippo_map'

class Explore extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="explore-container">
        <ListingsFilterContainer />
        <ListingsIndexContainer />
        <HippoMap />
      </div>
    )
  }
}

export default Explore;
