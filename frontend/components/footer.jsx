import React from 'react';

export default () => {
  return (
    <footer>
      <section class="footer-main">
        <div class="footer-container">
          <div class="row">
            <div class="col-sm-6 footer-col left">
              <h5>Hippocampus is everywhere you want to camp.</h5>
              <p>Discover unique experiences on ranches, nature preserves, farms, vineyards, and public campgrounds across the U.S. Book tent camping, treehouses, cabins, yurts, primitive backcountry sites, car camping, airstreams, tiny houses, RV camping, glamping tents and more. </p>
            </div>
            <div class="col-sm-6">
              <div class="row">
                <div class="col-md-4 col-md-offset-1 col-xs-4 footer-col">
                  <h5>Browse</h5>
                  <ul class="list-unstyled">
                    <li><a href="/host">Host campers</a></li>
                    <li><a href="/discover">Discover Camps</a></li>
                    <li><a href="/gift">Gift Cards</a></li>
                    <li><a target="_blank" href="http://hipcamp.helpscoutdocs.com">
                      Help</a></li>
                    <li><a href="/about#contact">Contact</a></li>
                  </ul>
                </div>
                <div class="col-md-4 col-xs-4 footer-col">
                  <h5>About</h5>
                  <ul class="list-unstyled">
                    <li><a href="/journal">Journal</a></li>
                    <li><a href="/about#our-story">Our Story</a></li>
                    <li><a href="/about#the-team">The Team</a></li>
                    <li><a href="/about#careers">Careers</a></li>
                    <li><a target="_blank" href="http://hipca.mp/thepresskit">Press Kit</a></li>
                  </ul>
                </div>
                <div class="col-md-3 col-xs-4 footer-col">
                  <h5>Social</h5>
                    <ul class="list-unstyled">
                      <li><a href="#"><span class="icon fa fa-facebook-official"></span> Facebook</a></li>
                      <li><a  href="#"><span class="icon fa fa-twitter"></span> Twitter</a></li>
                      <li><a  href="#"><span class="icon fa fa-instagram"></span> Instagram</a></li>
                      <li><a  href="#"><span class="icon fa fa-pinterest-p"></span> Pinterest</a></li>
                      <li><a href="#"><span class="icon fa fa-spotify"></span> Spotify</a></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="footer-bottom">
        <div class="container">
          <div class="bottom">
            <div class="pull-left">
              Made in California. A HipCamp Clone.
            </div>
            <div class="pull-right">
              <a href="/terms">Terms of Service</a> •
              <a href="/privacy"> Privacy Policy</a> • © 2018 Hippocampus
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}