import React from 'react';
import Moment from 'moment';

import './Footer.scss';

const Footer = () => (
  <footer className="footer region">
    <div className="footer-links">
      <div className="footer-links-inner">
        <p>{String.fromCharCode(169) + ' ' + Moment().format('YYYY')} {'Sarah, Corey, Brian LLC'}</p>
      </div>
    </div>
  </footer>
);

export default Footer;