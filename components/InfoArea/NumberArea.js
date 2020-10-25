import React from "react";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import {
  primaryColor,
  nearBlackColor,
  grayColor,
  defaultFont
} from "assets/jss/nextjs-material-kit.js";

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px",
  },
  numberWrapper: {
    color: grayColor,
    overflow: "hidden",
  },
  numberTitle: {
    color: primaryColor,
    color: "#000000",
    margin: "0",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "3.3rem",
    fontFamily: defaultFont.accentFontFamily
  },
  numberDescription: {
    color: nearBlackColor,
    overflow: "hidden",
    marginTop: "0px",
  },
};

const useStyles = makeStyles(infoStyle);

export default function InfoArea(props) {
  const classes = useStyles();
  const { title, description } = props;

  return (
    <div className={classes.infoArea}>
      <div className={classes.numberWrapper}>
        <h3 className={classes.numberTitle}>{title}</h3>
        <p className={classes.numberDescription}>{description}</p>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {};

InfoArea.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  description: PropTypes.string.isRequired,
  vertical: PropTypes.bool,
};
