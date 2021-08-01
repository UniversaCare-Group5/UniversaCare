import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import imageChap from "../images/CHAP-Standards-of-Excellence-Seal-2 1.png";

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

function Chap() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.grid} id="chap">
      <Grid item xs={12} md={3}>
        <div>
          <img className="chap-image" src={imageChap} alt="img-chap" />
        </div>
      </Grid>

      <Grid item xs={12} md={9}>
        <div>
          <h3 className="chap-line">
            CHAP Accreditation and this line can be about this big
          </h3>
          <div className="chap-para">
            Universacare , LLC will provide the following home health care
            programs at flexible schedules and cost friendly services rates.
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Chap;
