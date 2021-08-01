import React from "react";
import ReactDom from "react-dom";
import StarIcon from "@material-ui/icons/Star";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function Slide() {
  return (
    <div id="review">
      <div>
        <h1>
          5.0
          <br />
          <StarIcon className="main-star" />
          <StarIcon className="main-star" />
          <StarIcon className="main-star" />
          <StarIcon className="main-star" />
          <StarIcon className="main-star" />
        </h1>

        <p>
          2,054 verified customers
          <br /> reviews by Google.
        </p>
      </div>
      <div className="horizontal_slider">
        <div className="slider_container">
          <div className="item">
            <div className="card">
              <h5 className="card-title">Alvin Stanley</h5>
              <div style={{ display: " flex", flexDirection: "row" }}>
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
              </div>

              <p className="card-des">
                Great company to work for! This organization cares for its team
                of caregivers, office employees, and clients. There is always
                someone available to pick up the phone when you need help.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <h5 className="card-title">Alvin Stanley</h5>
              <div style={{ display: " flex", flexDirection: "row" }}>
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
              </div>
              <p className="card-des">
                Great company to work for! This organization cares for its team
                of caregivers, office employees, and clients.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <h5 className="card-title">Alvin Stanley</h5>
              <div style={{ display: " flex", flexDirection: "row" }}>
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
              </div>
              <p className="card-des">
                Great company to work for! This organization cares for its team
                of caregivers, office employees, and clients.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <h5 className="card-title">Alvin Stanley</h5>
              <div style={{ display: " flex", flexDirection: "row" }}>
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
              </div>
              <p className="card-des">
                Great company to work for! This organization cares for its team
                of caregivers, office employees, and clients.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <h5 className="card-title">Alvin Stanley</h5>
              <div style={{ display: " flex", flexDirection: "row" }}>
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
              </div>
              <p className="card-des">
                Great company to work for! This organization cares for its team
                of caregivers, office employees, and clients.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <h5 className="card-title">Alvin Stanley</h5>
              <div style={{ display: " flex", flexDirection: "row" }}>
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
              </div>
              <p className="card-des">
                Great company to work for! This organization cares for its team
                of caregivers, office employees, and clients.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <h5 className="card-title">Alvin Stanley</h5>
              <div style={{ display: " flex", flexDirection: "row" }}>
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
              </div>
              <p className="card-des">
                Great company to work for! This organization cares for its team
                of caregivers, office employees, and clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h5 className="more-reviews">
        SEE ALL REVIEWS <ArrowForwardIcon />{" "}
      </h5>
    </div>
  );
}

export default Slide;
