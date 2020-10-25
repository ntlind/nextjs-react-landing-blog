import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NumberArea from "components/InfoArea/NumberArea.js";

import { title, section } from "assets/jss/nextjs-material-kit.js";

const techStyle = {
  backgroundSection: {
    padding: "1.8em 0 1.8em 0",
    textAlign: "center",
    alignItems: "center",
    /* background by SVGBackgrounds.com */
    backgroundImage: "url('/images/patterns/Pattern-Randomized_small.svg')",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
  description: {
    color: "#999",
  },
  title : {
    ...title,
    fontSize: "1.5em",
    fontWeight: "300",
    color: "#000",
    margin: "1.3rem 0 1.8rem",
  },
  section,
};

const useStyles = makeStyles(techStyle);

export default function ServicesSection() {
  const classes = useStyles();
  return (
    <div className={classes.backgroundSection}>
      <h2 className={classes.title}> Statistics section for emphasis </h2>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <NumberArea
            title="50%"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <NumberArea
            title="$50B+"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <NumberArea
            title="50M"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            vertical
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
