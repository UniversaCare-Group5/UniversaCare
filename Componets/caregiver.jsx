import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import Lines from "../images/Group 49.svg";
import img1 from "../images/Frame 315.png";
import img2 from "../images/Frame 315 (1).png";
import img3 from "../images/Frame 315 (2).png";
import img4 from "../images/Frame 315 (3).png";

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

function Caregiver() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.grid} id="caregiver">
      <Grid item xs={12}>
        <div className="caregiver">
          <div className="caregiver-main-title">
            How We Find <p className="best-caregiver"> Best Caregiver </p>For
            You
          </div>

          <img className="lines" src={Lines} alt="img" />
        </div>
      </Grid>

      <Grid item xs={12} md={3}>
        <div class="circle">
          <img class="frame" src={img1} alt="frame1" />
        </div>
        <h5 class="caregiver-title">
          1.Initial
          <br />
          Consultation
        </h5>
        <div className="caregiver-des">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
          augue nec massa volutpat aliquam fringilla non.
        </div>
      </Grid>
      <Grid item xs={12} md={3}>
        <div class="circle">
          <img class="frame" src={img2} alt="frame2" />
        </div>
        <h5 class="caregiver-title">
          2.Customized
          <br />
          Care Plan
        </h5>
        <p className="caregiver-des">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
          augue nec massa volutpat aliquam fringilla non.
        </p>
      </Grid>
      <Grid item xs={12} md={3}>
        <div class="circle">
          <img class="frame" src={img3} alt="frame3" />
        </div>
        <h5 class="caregiver-title">
          3.Caregiver
          <br />
          Matching
        </h5>
        <p className="caregiver-des">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
          augue nec massa volutpat aliquam fringilla non.
        </p>
      </Grid>
      <Grid item xs={12} md={3}>
        <div class="circle">
          <img class="frame" src={img4} alt="frame4" />
        </div>
        <h5 class="caregiver-title">
          4.Ongoing Support
          <br />& Supervision
        </h5>
        <p className="caregiver-des">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
          augue nec massa volutpat aliquam fringilla non.
        </p>
      </Grid>
    </Grid>
  );
}
export default Caregiver;
