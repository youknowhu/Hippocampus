import React from 'react';

export default () => {
  return (
    <footer>
      <section className="footer-main">
        <div className="footer-container">
          <div className="row left footer-col">
            <div className="footer-left-col">
              <h5>Hippocampus is everywhere you want to camp.</h5>
              <p>Discover unique experiences in igloos, treehouses and public campgrounds across the U.S. Book
              tent camping, cabins, yurts, and primitive backcountry
              sites, and more. </p>
            </div>
          </div>
          <div className="row right">
            <div className="footer-col">
              <h5>About</h5>
              <ul className="list-unstyled">
                <li><a href="https://github.com/youknowhu">My Story</a></li>
                <li><a href="https://github.com/youknowhu">The Team</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Social</h5>
                  <ul className="list-unstyled">
                    <li><a href="https://www.facebook.com/kimmyhu"><span className="icon fa fa-facebook-official"></span>  Facebook</a></li>
                    <li><a href="https://www.instagram.com/youknowhu/"><span className="icon fa fa-instagram"></span>  Instagram</a></li>
                    <li><a href="https://github.com/youknowhu"> <i className="fa fa-github"></i>  Github</a></li>
                    <li><a href="https://www.linkedin.com/in/kimberly-hu/"> <i className="fa fa-linkedin"></i>  LinkedIn</a></li>
                  </ul>
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
              © 2018 Hippocampus
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
