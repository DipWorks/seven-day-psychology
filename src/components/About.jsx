import React from "react";
import sandeep from "../images/sandeepPP.jpg";
import melina from "../images/MelinaDC.jpg";
import elina from "../images/elinaDC.jpg";

function About(props) {
  return (
    <React.Fragment>
      <div className="container-fluid padding about-us">
        <div className="row aboutUs text-center">
          <div className="col-12">
            <h1 className="display-4">About Us</h1>
          </div>
          <hr></hr>
          <div className="col-12">
            <p className="lead">
              We are a renowned mental health clinic center in Australia with
              over 10 clinics spread all across the country. We beleive in the
              satisfaction of our clients and pride ourselves upon solving their
              problems. We are plannig on overseas extension and having hundreds
              of clinics across the globe with hundreds of thousands of happy
              customers is our goal.
            </p>
          </div>
        </div>
      </div>

      <div>
        <hr className="my-4"></hr>
      </div>
      {/* Introduction cards */}

      <div className="container-fluid padding">
        <div className="row text-center padding">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <img
              className="img-thumbnail"
              alt="Sndeep Lamichhane"
              src={sandeep}
            ></img>
            <h3>Sandeep Lamichhane</h3>
            <p>
              Chief Executive Director <br />
              Email: lamichhanesandip@gmail.com
            </p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <img
              className="img-thumbnail"
              alt="Sndeep Lamichhane"
              src={melina}
            ></img>
            <h3>Melina DC</h3>
            <p>
              Senior Councellor <br />
              Email: dcmelina@gmail.com
            </p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <img
              className="img-thumbnail"
              alt="Sndeep Lamichhane"
              src={elina}
            ></img>
            <h3>Elina DC Oli</h3>
            <p>
              Councellor / Doctor <br />
              Email: elinadcoli@gmail.com
            </p>
          </div>
        </div>
        <hr className="my-4 "></hr>
      </div>
    </React.Fragment>
  );
}

export default About;
