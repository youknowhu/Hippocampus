import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <main className="main-header">
        <section className="row left">
          <h2>Adventure is waiting.</h2>
          <div className="subtext">
            <h1>Search, discover and book over <strong>25</strong> campsites, ranches, vineyards, farms, public parks and more.</h1>
          </div>
          <div className="main-search-box">
            <Link to="/explore">
              <div className="location-search">
                <input type="text" name="location" className="find-camping" placeholder="Find camping near..."/>
                <i className="fa fa-search"></i>
              </div>
            </Link>
            <div className="dates-search">
              <input type="text" name="check-in-date"
               className="datepicker" placeholder="Check In"/>
              <input type="text" name="check-out-date"
               className="datepicker" placeholder="Check Out"/ >
              <div className="search-button">
                Search
              </div>
            </div>
          </div>
          <div className="search-subtext">
            <p className="discover-subtext">
              or Discover the best camps near me           <i className="fa fa-long-arrow-right"></i>
            </p>
          </div>
        </section>
        <section className="row right"><Link to="/listings/10">
          <img src='http://res.cloudinary.com/deor0br3s/image/upload/v1522783893/glacier_national_park.jpg'/>
          <p className="main-header-image-footer">
            <strong>Glacier National Park</strong> hosted by U.S. National Park Service
          </p></Link>
        </section>
      </main>
      <section className="discover-filters">
        <h2>Discover camping...</h2>
        <section className="discover-grid">

          <div className="discover-square">
            <div className="crop">
              <img src="http://res.cloudinary.com/deor0br3s/image/upload/v1522898892/tent_cropped.jpg"/>
            </div>
            <footer className="discover-footer">
              <h2>Camping under $30</h2>
              <p>Best options near me</p>
            </footer>
          </div>

          <div className="discover-square">
            <div className="crop">
              <img src="http://res.cloudinary.com/deor0br3s/image/upload/v1522898891/glamping_cropped.jpg"/>
            </div>
            <footer className="discover-footer">
              <h2>Glamping</h2>
              <p>Best options near me</p>
            </footer>
          </div>

          <div className="discover-square">
            <div className="crop">
              <img src="http://res.cloudinary.com/deor0br3s/image/upload/v1522898896/dogs_woods_cropped.jpg"/>
            </div>
            <footer className="discover-footer">
              <h2>Pet friendly camping</h2>
              <p>Best options near me</p>
            </footer>
          </div>

          <div className="discover-square">
            <div className="crop">
              <img src="http://res.cloudinary.com/deor0br3s/image/upload/v1522898903/Zion_National_Park.jpg"/>
            </div>
            <footer className="discover-footer">
              <h2>Zion</h2>
              <p>Utah</p>
            </footer>
          </div>

          <div className="discover-square">
            <div className="crop">
              <img src="http://res.cloudinary.com/deor0br3s/image/upload/v1522898894/channel_islands.jpg"/>
            </div>
            <footer className="discover-footer">
              <h2>Channel Islands</h2>
              <p>California</p>
            </footer>
          </div>

          <div className="discover-square">
            <div className="crop">
              <img src="http://res.cloudinary.com/deor0br3s/image/upload/v1522898891/glacier_lake_cropped.jpg"/>
            </div>
            <div className="discover-footer">
              <h2>Glacier National Park</h2>
              <p>Montana</p>
            </div>
          </div>

          <div className="discover-square">
            <div className="crop">
              <img src="http://res.cloudinary.com/deor0br3s/image/upload/v1522899727/yosemite_cropped.jpg"/>
            </div>
            <footer className="discover-footer">
              <h2>Yosemite</h2>
              <p>California</p>
            </footer>
          </div>

          <div className="discover-square">
            <div className="crop">
              <img src="http://res.cloudinary.com/deor0br3s/image/upload/v1522898893/joshua_tree_cropped.jpg"/>
            </div>
            <footer className="discover-footer">
              <h2>Joshua Tree</h2>
              <p>California</p>
            </footer>
          </div>

          <div className="discover-square">
            <div className="crop">
              <img src="http://res.cloudinary.com/deor0br3s/image/upload/v1522899844/yellowstone_cropped.jpg"/>
            </div>
            <footer className="discover-footer">
              <h2>Yellowstone</h2>
              <p>Wyoming</p>
            </footer>
          </div>
        </section>
      </section>
    </div>

  )
}

export default withRouter(Main);
