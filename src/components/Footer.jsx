import React from "react";
import logo from "../images/logo.png";

function Footer(props) {
  return (
    <footer>
      <div className="container-fluid padding">
        <div className="row text-center">
          <div className="col-md-4 footer-logo-col">
            <img className="footer-logo" src={logo} />
            <hr className="light" />
            <p>042-456-987</p>
            <p>sevedaypsychology@gmail.com</p>
            <p>100 Park Road</p>
            <p>Auburn, NSW, 2144</p>
          </div>
          <div className="col-md-4">
            <hr className="light"></hr>
            <h5>Opening Hours</h5>
            <hr className="light"></hr>
            <p>Monday to Friday: 9 am to 5 pm</p>
            <p>Saturday: 10 am to 3 pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="col-md-4">
            <hr className="light"></hr>
            <h5>Other Locations</h5>
            <hr className="light"></hr>
            <p>Hobart, Tasmania, 7310</p>
            <p>Melbourne Victorira, 6510</p>
            <p>New Castle, NSW, 2200</p>
            <p>Central, NSW, 2100</p>
          </div>
          <div className="col-12">
            <hr className="light-100" />
            <h5>&copy; 7daysychology.com</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
