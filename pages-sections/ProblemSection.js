import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { grayColor } from "assets/jss/nextjs-material-kit.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import {
  title,
  section,
  ThinGrayLine,
} from "assets/jss/nextjs-material-kit.js";

const problemStyle = {
  section,
  title,
  description: {
    color: grayColor,
  },
};

const useStyles = makeStyles(problemStyle);

export default function ProblemSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10} lg={10} xl={10}>
          <h2 className={classes.title}>
            Wow, such a cool landing page!
          </h2>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <br />
        </GridItem>
      </GridContainer>
      <ThinGrayLine />
    </div>
  );
}
