import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>Netflix</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Contact Us</li>
              <li>Privacy & Policy</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>Our history</li>
              <li>Careers</li>
              <li>Queries</li>
              <li>More</li>
            </ul>
          </div>
        </div>
        <div>
          {/* <div className="heading">
            <p>Netflix</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div> */}
        </div>
      </div>
      {/* <div className="footer">
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-2021 OLX</p>
      </div> */}
    </div>
  );
}

export default Footer;
