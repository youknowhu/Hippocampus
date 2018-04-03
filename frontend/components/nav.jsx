import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <header class="nav-header">
      <div class="nav-left">
        <img class="logo" src="http://res.cloudinary.com/deor0br3s/image/upload/c_scale,w_255/v1522784845/hippocampus_logo.png"/>
        <nav class="discover-nav">
          <ul>
            <li class="search"><i class="fa fa-search"></i><strong>Search</strong></li>
            <li><label>Camping</label></li>
            <li><label>Hosting</label></li>
            <li><label>Scouting</label></li>
            <li><label>About</label></li>
          </ul>
        </nav>
      </div>
      <div class="nav-right">
        <h4><Link to="/login" className="js-modal-open">Log In</Link></h4>
      </div>
    </header>
  )
}
