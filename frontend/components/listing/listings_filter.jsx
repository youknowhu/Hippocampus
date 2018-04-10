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
          <h2> Accomodations </h2>
          <ul className='explore-filters-list'>
            <li className='filters-list-item'>
              <input id='pet-friendly-filter'
              className='checkbox-filter' type='checkbox'/>
              <label for='pet-friendly-filter' className='checkbox-label'>Pet Friendly</label>
            </li>
            <li className='filters-list-item'>
              <input id='camping-filter'
              className='checkbox-filter' type='checkbox'/>
              <label for='camping-filter' className='checkbox-label'>Camping</label>
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
            <li className='filters-list-item'>
              <input id='less-than-100-filter'
              className='checkbox-filter' type='checkbox'/>
              <label for='less-than-100-filter' className='checkbox-label'>Less than $100/night</label>
            </li>
          </ul>
          <h2> Activities </h2>
          <ul className='explore-filters-list'>
            <li className='filters-list-item'>
              <input id='biking-filter'
              className='checkbox-filter' type='checkbox'/>
              <label for='biking-filter' className='checkbox-label'>Biking</label>
            </li>
            <li className='filters-list-item'>
              <input id='hiking-filter'
              className='checkbox-filter' type='checkbox'/>
              <label for='hiking-filter' className='checkbox-label'>Hiking</label>
            </li>
            <li className='filters-list-item'>
              <input id='water-sports-filter'
              className='checkbox-filter' type='checkbox'/>
              <label for='water-sports-filter' className='checkbox-label'>Water Sports</label>
            </li>
          </ul>
          <h2> Terrain </h2>
          <ul className='explore-filters-list'>
            <li className='filters-list-item'>
              <input id='forest-filter'
              className='checkbox-filter' type='checkbox'/>
              <label for='forest-filter' className='checkbox-label'>Forest</label>
            </li>
            <li className='filters-list-item'>
              <input id='waterfall-filter'
              className='checkbox-filter' type='checkbox'/>
              <label for='waterfall-filter' className='checkbox-label'>Waterfall</label>
            </li>
            <li className='filters-list-item'>
              <input id='lake-filter'
              className='checkbox-filter' type='checkbox'/>
              <label for='lake-filter' className='checkbox-label'>Lake</label>
            </li>
          </ul>

        </div>
      )
    }
  }
}

export default withRouter(ListingsFilter);
