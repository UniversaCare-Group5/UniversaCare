import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import Chap from "./Componets/chap";
import Caregiver from "./Componets/caregiver";
import Footer from "./Componets/footer";
import Review from "./Componets/review";
import Slide from "./Componets/reviewMobile";
import Scrnsz from "./Componets/changeView";

export default function App() {
  return (
    <div>
      <Caregiver />
      <Chap />
      <Scrnsz />
      <Footer />
    </div>
  );
}
