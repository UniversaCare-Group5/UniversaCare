import React from "react";
import ReactDOM from "react-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

// images imported
import companyLogo from "../images/UC-Logo_Vector-01 3.png";
import chap from "../images/chap.png";
import NycLogo from "../images/NYC MWBE Logo 1.png";

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

function Footer() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.grid} id="footer">
      <Grid item xs={12} md={4}>
        <h6 class="footer_headings">HEADQUATERS</h6>
        <hr class="footer-heading-line" />
        <p class="footer_col1">
          246-50 57th Drive
          <br />
          Douglaston,NY 11362
          <br />
          hello@universacare.com
          <br />
          P:(718) 244-3758
          <br />
          F:8777999065
        </p>
        <p className="mobile-col1">
          246-50 57th Drive Douglaston, NY 11362
          <br />
          Email: hello@universacare.com
          <br />
          Phone: (718) 224-3758
          <br />
          Fax: 8777999065
          <br />
        </p>
        <img class="logo" src={companyLogo} alt="logo" />
      </Grid>
      <Grid item xs={6} md={2}>
        <h6 class="footer_headings">SERVICES</h6>
        <hr class="footer-heading-line" />
        <p className="footer_col23">
          <div class="border-circle"></div> Hourly Care
          <br />
          <div class="border-circle"></div> Daily Care
          <br />
          <div class="border-circle"></div> Hospital to Home
          <br />
          <div class="border-circle"></div> Respite Care
          <br />
          <div class="border-circle"></div> Specialized Care
          <br />
        </p>
      </Grid>
      <Grid item xs={6} md={2}>
        <h6 class="footer_headings">COMPANY</h6>
        <hr class="footer-heading-line" />
        <p className="footer_col23">
          <div class="border-circle"></div> About us
          <br />
          <div class="border-circle"></div> Locations
          <br />
          <div class="border-circle"></div> Caregivers
          <br />
          <div class="border-circle"></div> News & Blog
          <br />
          <div class="border-circle"></div> Contact Us
          <br />
          <div class="border-circle"></div> FAQ
          <br />
        </p>
      </Grid>
      <Grid item xs={12} md={4}>
        <p className="footerPara">Sign up to recieve the latest articles</p>
        <form class="email-input">
          <input
            class="form-control"
            type="email"
            placeholder="Your email adress"
          />
        </form>
        <button className="footerButton" type="button">
          SUBMIT
        </button>
        <br />
        <div className="footer-logos">
          <img class="footer-img" src={chap} alt="Chap-img" />
          <img class="footer-img" src={NycLogo} alt="NYC-img" />
        </div>
        <p class="followUs">
          Follow Us <FacebookIcon className="social-icons" />
          <InstagramIcon className="social-icons" />
          <LinkedInIcon className="social-icons" />
          <TwitterIcon className="social-icons" />
        </p>
      </Grid>
      <Grid item xs={12}>
        <hr id="Horizontal-line" />
        <div className="copyright">
          Copyright 2020 <h6 class="footer_headings"> Universacare</h6> - All
          rights reserved.
        </div>
      </Grid>
    </Grid>
  );
}

export default Footer;
