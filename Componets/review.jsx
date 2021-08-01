import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StarIcon from "@material-ui/icons/Star";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color5: theme.palette.text.secondary,
    background: theme.palette.success.light
  }
}));

function Review() {
  const classes = useStyles();
  return (
    <div>
      {/*  */}
      <Carousel>
        <Carousel.Item>
          <Grid container spacing={2} className={classes.grid} id="review">
            <Grid item xs={12} md={3}>
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
            </Grid>
            <Grid item xs={12} md={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Alvin Stanley</Card.Title>
                  <div style={{ display: " flex", flexDirection: "row" }}>
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                  </div>
                  <p className="card-des">
                    Great company to work for! This organization cares for its
                    team of caregivers, office employees, and clients. There is
                    always someone available to pick up the phone when you need
                    help.
                  </p>
                </Card.Body>
              </Card>
              <h5 className="more-reviews">
                SEE ALL REVIEWS <ArrowForwardIcon />
              </h5>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Alvin Stanley</Card.Title>
                  <div style={{ display: " flex", flexDirection: "row" }}>
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                  </div>
                  <p className="card-des">
                    Great company to work for! This organization cares for its
                    team of caregivers, office employees, and clients.
                  </p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Alvin Stanley</Card.Title>
                  <div style={{ display: " flex", flexDirection: "row" }}>
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                  </div>
                  <p className="card-des">Awesome!</p>
                </Card.Body>
              </Card>
            </Grid>
          </Grid>
        </Carousel.Item>

        <Carousel.Item>
          <Grid container spacing={2} className={classes.grid} id="review">
            <Grid item xs={12} md={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Alvin Stanley</Card.Title>
                  <div style={{ display: " flex", flexDirection: "row" }}>
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                  </div>
                  <p className="card-des">
                    Great company to work for! This organization cares for its
                    team of caregivers, office employees, and clients.
                  </p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Alvin Stanley</Card.Title>
                  <div style={{ display: " flex", flexDirection: "row" }}>
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                  </div>
                  <p className="card-des">Great Work!</p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Alvin Stanley</Card.Title>
                  <div style={{ display: " flex", flexDirection: "row" }}>
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                  </div>
                  <p className="card-des">
                    Great company to work for! This organization cares for its
                    team of caregivers, office employees, and clients.
                  </p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Alvin Stanley</Card.Title>
                  <div style={{ display: " flex", flexDirection: "row" }}>
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                  </div>
                  <p className="card-des">Great Work!</p>
                </Card.Body>
              </Card>
            </Grid>
          </Grid>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Review;
