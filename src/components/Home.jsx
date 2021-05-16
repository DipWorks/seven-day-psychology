import React from "react";
import mentalHealth from "../images/house.png";
import center from "../images/rolling-house.png";
import bulb from "../images/cool-home.png";
import About from "./About";
import panda from "../images/gif/panda.gif";
import chicken from "../images/gif/chicken.gif";
import poo from "../images/gif/poo.gif";
import unicorn from "../images/gif/unicorn.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";
import { computeHeadingLevel } from "@testing-library/dom";

function Home(props) {
  var scope = {
    sliderStyle: {
      height: 500,
    },
  };
  return (
    <main>
      {/* Image Slider */}
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="4500"
      >
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className="carousel-item active" style={scope.sliderStyle}>
            <img src={mentalHealth} alt="Chania" />
            <div className="carousel-caption">
              <h1 className="display-2">SEVEN DAY PSYCHOLOGY</h1>
              <h3>We care about your mental health</h3>
              <button type="button" className="btn btn-secondary btn-lg">
                BOOK A SESSION
              </button>
            </div>
          </div>

          <div className="carousel-item" style={scope.sliderStyle}>
            <img src={center} alt="Chicago" />
            <div className="carousel-caption">
              <h3>Refreshing locations</h3>
              <p>Be close to the nature. A heartwarming experience!</p>
            </div>
          </div>

          <div className="carousel-item" style={scope.sliderStyle}>
            <img src={bulb} alt="New York" />
            <div className="carousel-caption">
              <h3>Other Centers</h3>
              <p>We own several service centers like this around the world!</p>
            </div>
          </div>
        </div>

        {/* Left and right controls */}
        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* Jumbotron */}
      <div className="container-fluid">
        <div className="row jumbotron">
          <div className="col-xs-12 cols-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p className="lead">
              We provide extremely quilified counsellors with years of
              exprerience coupled with world class facilities. Whatever
              difficulties you're facing, come and get rid of them.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
            <a href="#">
              <button type="button" className="btn btn-outline-dark btn-lg">
                View Ratings
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* About page */}
      <About />

      {/*Social media section */}
      <div className="contianer-fluid padding social-icons">
        <div className="row text-center padding">
          <div className="col-12">
            <h2>Connect</h2>
          </div>
          <div className="col-12 social padding">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}

export default Home;
