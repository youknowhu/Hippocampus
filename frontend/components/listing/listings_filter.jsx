import React from 'react';
import { Link, withRouter } from 'react-router-dom';
//Will need to pass edit and delete review methods to Review Index Item

class ListingsFilter extends React.Component {
  render() {
    if (Object.keys(this.props.listings).length === 0) {
      return (
        <div> </div>
      )
    } else {

      return (
        <div className="explore-filters">
          <h2> Features </h2>
          <ul className='explore-filters-list'>
            <li className='filters-list-item'>
              <input id='pet-friendly-filter'
              className='checkbox-filter' type='checkbox'/>
              <label for='pet-friendly-filter' className='checkbox-label'>Pet Friendly</label>
            </li>
            <li className='filters-list-item'>
              <input id='glamping-filter'
              className='checkbox-filter' type='checkbox'/>
              <label for='glamping-filter' className='checkbox-label'>Glamping</label>
            </li>
            <li className='filters-list-item'>
              <input id='group-filter'
              className='checkbox-filter' type='checkbox'/>
              <label for='group-filter' className='checkbox-label'>Group Site (15+)</label>
            </li>
          </ul>
          <h2> Pricing </h2>
          <ul className='explore-filters-list'>
            <li className='filters-list-item'>
              <input id='less-than-25-filter'
              className='checkbox-filter' type='checkbox'/>
              <label for='less-than-25-filter' className='checkbox-label'>Less than $25/night</label>
            </li>
            <li className='filters-list-item'>
              <input id='less-than-50-filter'
              className='checkbox-filter' type='checkbox'/>
              <label for='less-than-50-filter' className='checkbox-label'>Less than $50/night</label>
            </li>
          </ul>
        </div>
      )
    }
  }
}

export default withRouter(ListingsFilter);
