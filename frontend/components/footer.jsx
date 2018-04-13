import React from 'react';

export default () => {
  return (
    <footer>
      <section className="footer-main">
        <div className="footer-container">
          <div className="row">
            <div className="footer-col left">
              <h5>Hippocampus is everywhere you want to camp.</h5>
              <p>Discover unique experiences on ranches, nature preserves, farms, vineyards, and public campgrounds across the U.S. Book tent camping, treehouses, cabins, yurts, primitive backcountry sites, car camping, airstreams, tiny houses, RV camping, glamping tents and more. </p>
            </div>
            <div>
              <div className="row">
                <div className="footer-col">
                  <h5>Browse</h5>
                  <ul className="list-unstyled">
                    <li><a href="https://github.com/youknowhu">Host campers</a></li>
                    <li><a href="https://github.com/youknowhu">Discover Camps</a></li>
                    <li><a href="https://github.com/youknowhu">Gift Cards</a></li>
                    <li><a href="https://github.com/youknowhu">Contact</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h5>About</h5>
                  <ul className="list-unstyled">
                    <li><a href="https://github.com/youknowhu">Journal</a></li>
                    <li><a href="https://github.com/youknowhu">Our Story</a></li>
                    <li><a href="https://github.com/youknowhu">The Team</a></li>
                    <li><a href="https://github.com/youknowhu">Careers</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h5>Social</h5>
                      <ul className="list-unstyled">
                        <li><a href="https://github.com/youknowhu"><span className="icon fa fa-facebook-official"></span> Facebook</a></li>
                        <li><a  href="https://github.com/youknowhu"><span className="icon fa fa-twitter"></span> Twitter</a></li>
                        <li><a  href="https://github.com/youknowhu"><span className="icon fa fa-instagram"></span> Instagram</a></li>
                        <li><a  href="https://github.com/youknowhu"><span className="icon fa fa-pinterest-p"></span> Pinterest</a></li>
                        <li><a href="https://github.com/youknowhu"><span className="icon fa fa-spotify"></span> Spotify</a></li>
                      </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-bottom">
        <div className="container">
          <div className="bottom">
            <div className="pull-left">
              Made in California. <a href="https://www.hipcamp.com"> A HipCamp Clone. </a>
            </div>
            <div className="pull-right">
              <a href="/terms">Terms of Service</a> •
              <a href="/privacy"> Privacy Policy</a> • © 2018 Hippocampus
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
