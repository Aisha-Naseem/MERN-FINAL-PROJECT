import React from 'react';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="bg-dark text-white" style={{ position: 'fixed', bottom: 0, width: '100%', height: '1in', zIndex: 1 }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4 className='text-danger'>Pizza Palace</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Products</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className='text-danger'>Get Help</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Complains</a>
              </li>
              <li>
                <a href="#">Payment Options</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className='text-danger'>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-icon">
                <AiFillFacebook size={20} />
              </a>
              <a href="#" className="social-icon">
                <AiFillTwitterSquare size={20} />
              </a>
              <a href="#" className="social-icon">
                <AiFillInstagram size={20} />
              </a>
              <a href="#" className="social-icon">
                <AiFillLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-1" style={{ borderTop: '1px solid #aaa', color: 'grey', fontSize: '12px' }}>
        All Rights Reserved &copy; Pizza Palace
      </div>
    </footer>
  );
}
