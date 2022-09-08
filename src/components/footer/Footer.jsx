import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="logo">OneDev</div>
              <input
                type="text"
                placeholder="Your mail"
                className="input-mail"
              />
              <button className="btn btn-mail">Subscribe</button>
              <div className="social-media">
                <a href="#">
                  <img
                    src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content10/bi_facebook.svg"
                    alt="facebook"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content10/bi_twitter.svg"
                    alt="twitter"
                    className="img-fluid mr-4"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content10/bi_instagram.svg"
                    alt="twitch"
                    className="img-fluid mr-4"
                  />
                </a>
              </div>
              <div className="copyright mb-md-0 mb-5">
                2022 All rights reserved.
              </div>
            </div>
            <div className="row col-md-6 nav-footer">
              <div className="col-md-4">
                <p>Features</p>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Payments</a>
                  </li>
                  <li>
                    <a href="#!">Collections</a>
                  </li>
                  <li>
                    <a href="#!">Conversions</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <p>Resources</p>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Blog</a>
                  </li>
                  <li>
                    <a href="#!">FAQ</a>
                  </li>
                  <li>
                    <a href="#!">Partnerships</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <p>Our Company</p>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">About Us</a>
                  </li>
                  <li>
                    <a href="#!">Careers</a>
                  </li>
                  <li>
                    <a href="#!">News & Media</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
