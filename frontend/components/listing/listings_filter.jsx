import React from 'react';
import { Link, withRouter } from 'react-router-dom';
//Will need to pass edit and delete review methods to Review Index Item

class ListingsFilter extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.filters;
    this.toggle = this.toggle.bind(this);
    this.handlePricingFilter = this.handlePricingFilter.bind(this);
  }

  toggle(category) {
    const { filters, removeSingleFilter,
      receiveSingleFilter } = this.props;

    return e => {
      if (filters[category] === true) {
        removeSingleFilter(category)
      } else {
        receiveSingleFilter(category)
      }
    }
  }

  handlePricingFilter(amount) {
    const { receivePricingFilter, removePricingFilter, filters } = this.props;

    return e => {
      if (filters['pricing'] === amount) {
        removePricingFilter(amount)
      } else {
      receivePricingFilter(amount)
      }
    }
  }

  render() {
    const { filters } = this.props;
    
    return (
      <div className="explore-filters">
        <h2> Accomodations </h2>
        <ul className='explore-filters-list'>
          <li className='filters-list-item'>
            <input id='pet-friendly-filter'
              className='checkbox-filter'
              type='checkbox'
              onClick={this.toggle('pets')}
              />
            <label htmlFor='pet-friendly-filter' className='checkbox-label'>Pet Friendly</label>
          </li>
          <li className='filters-list-item'>
            <input id='camping-filter'
            className='checkbox-filter'
            type='checkbox'
            onClick={this.toggle('camping')}
            />
            <label htmlFor='camping-filter' className='checkbox-label'>Camping</label>
          </li>
          <li className='filters-list-item'>
            <input id='glamping-filter'
            className='checkbox-filter'
            type='checkbox'
            onClick={this.toggle('glamping')}
            />
            <label htmlFor='glamping-filter' className='checkbox-label'>Glamping</label>
          </li>
          <li className='filters-list-item'>
            <input id='group-filter'
            className='checkbox-filter'
            type='checkbox'
            onClick={this.toggle('group')}
            />
            <label htmlFor='group-filter' className='checkbox-label'>Group Site (15+)</label>
          </li>
        </ul>
        <h2> Pricing </h2>
        <ul className='explore-filters-list'>
          <li className='filters-list-item'>
            <input id='less-than-25-filter'
            className='checkbox-filter'
            name="pricing-filter"
            type='radio'
            onClick={ this.handlePricingFilter(25) }
            checked={ filters['pricing'] === 25 }
            />
            <label htmlFor='less-than-25-filter' className='checkbox-label'>Less than $25/night</label>
          </li>
          <li className='filters-list-item'>
            <input id='less-than-50-filter'
            className='checkbox-filter'
            type='radio'
            name="pricing-filter"
            onClick={ this.handlePricingFilter(50) }
            checked={ filters['pricing'] === 50 }
            />
            <label htmlFor='less-than-50-filter' className='checkbox-label'>Less than $50/night</label>
          </li>
          <li className='filters-list-item'>
            <input id='less-than-100-filter'
            className='checkbox-filter'
            type='radio'
            name="pricing-filter"
            onClick={ this.handlePricingFilter(100) }
            checked={ filters['pricing'] === 100 }
            />
            <label htmlFor='less-than-100-filter' className='checkbox-label'>Less than $100/night</label>
          </li>
        </ul>
        <h2> Activities </h2>
        <ul className='explore-filters-list'>
          <li className='filters-list-item'>
            <input id='biking-filter'
            className='checkbox-filter' type='checkbox'/>
            <label htmlFor='biking-filter' className='checkbox-label'>Biking</label>
          </li>
          <li className='filters-list-item'>
            <input id='hiking-filter'
            className='checkbox-filter' type='checkbox'/>
            <label htmlFor='hiking-filter' className='checkbox-label'>Hiking</label>
          </li>
          <li className='filters-list-item'>
            <input id='water-sports-filter'
            className='checkbox-filter' type='checkbox'/>
            <label htmlFor='water-sports-filter' className='checkbox-label'>Water Sports</label>
          </li>
        </ul>
        <h2> Terrain </h2>
        <ul className='explore-filters-list'>
          <li className='filters-list-item'>
            <input id='forest-filter'
            className='checkbox-filter' type='checkbox'/>
            <label htmlFor='forest-filter' className='checkbox-label'>Forest</label>
          </li>
          <li className='filters-list-item'>
            <input id='waterfall-filter'
            className='checkbox-filter' type='checkbox'/>
            <label htmlFor='waterfall-filter' className='checkbox-label'>Waterfall</label>
          </li>
          <li className='filters-list-item'>
            <input id='lake-filter'
            className='checkbox-filter' type='checkbox'/>
            <label htmlFor='lake-filter' className='checkbox-label'>Lake</label>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(ListingsFilter);
