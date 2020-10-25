import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// @material-ui/icons
import SmsFailed from "@material-ui/icons/SmsFailed";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Code from "@material-ui/icons/Code";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import imagesStyle from "assets/jss/imagesStyles.js";
import { grayColor, section, title } from "assets/jss/nextjs-material-kit.js";

const productStyle = {
  section,
  ...imagesStyle,
  title,
  description: {
    color: grayColor,
  },
  imageGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
};

const useStyles = makeStyles(productStyle);

export default function ProductSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgFluid, classes.imgRounded);

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem
          xs={12}
          sm={12}
          md={6}
          className={classes.imageGrid}
        ></GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Yet another beautiful section</h2>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Section 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              icon={SmsFailed}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Section 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              icon={BubbleChart}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Section 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              icon={Code}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
