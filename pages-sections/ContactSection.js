import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CalendlyButton from "components/CustomButtons/CalendlyButton.js";
import Button from "components/CustomButtons/Button.js";

import {
  cardTitle,
  title,
  grayColor,
  section,
} from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/imagesStyles.js";

const contactStyle = {
  section,
  title,
  ...imagesStyle,
  description: {
    color: grayColor,
    marginBottom: "20px",
  },
  contactDetails: {
    margin: "2.6rem 0 3.5rem",
    fontSize: "1.3rem",
    color: "#000000",
  },
  textPadding: {
    marginBottom: "50px",
    color: grayColor,
  },
  cardTitle: {
    ...cardTitle,
    marginTop: "1em",
    marginBottom: "0",
    padding: "0",
  },
  smallTitle: {
    color: "#6c757d",
    margin: ".0 0 .5em",
  },
  socials: {
    marginTop: "-.3em",
    color: "#999",
  },
  imageGrid: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "18px",
  },
  headshotDetails: {
    alignItems: "center",
    justifyContent: "center",
  },
  contactHeader: {
    marginBottom: "-.04em",
  },
};

const useStyles = makeStyles(contactStyle);

export default function ContactSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid,
    classes.imgRoundedCircle
  );
  return (
    <div id="contact-us" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Section title</h2>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CalendlyButton
              url="https://calendly.com/[your_url]/30min"
              text="Schedule my discovery call"
            />
          </div>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.contactDetails}>
              <div className={classes.textPadding}>
                <h6 className={classes.contactHeader}> PHONE </h6> +1 ‪(303)
                111-1111‬
              </div>
              <div className={classes.textPadding}>
                <h6 className={classes.contactHeader}> EMAIL </h6>{" "}
                hello@youremail.com
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <GridItem xs={12} sm={12} md={6} className={classes.imageGrid}>
              <img
                src={"/images/faces/kendall.JPG"}
                alt=""
                className={imageClasses}
              />
            </GridItem>
            <div className={classes.headshotDetails}>
              <p className={classes.cardTitle}>Kendall Jones</p>
              <p className={classes.smallTitle}>Co-founder</p>
              <div>
                <Button
                  justIcon
                  color="transparent"
                  size="lg"
                  target="_blank"
                  title="Connect with Kendall on LinkedIn"
                  href="https://www.linkedin.com/in/yourlinkedinhere/"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
