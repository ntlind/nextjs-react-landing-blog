import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
// core components
import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor
} from "assets/jss/nextjs-material-kit.js";

const customLinearProgressStyle = {
  root: {
    height: "4px",
    marginBottom: "20px",
    overflow: "hidden"
  },
  bar: {
    height: "4px"
  },
  primary: {
    backgroundColor: primaryColor
  },
  warning: {
    backgroundColor: warningColor
  },
  danger: {
    backgroundColor: dangerColor
  },
  success: {
    backgroundColor: successColor
  },
  info: {
    backgroundColor: infoColor
  },
  rose: {
    backgroundColor: roseColor
  },
  gray: {
    backgroundColor: grayColor
  },
  primaryBackground: {
    background: "rgba(156, 39, 176, 0.2)"
  },
  warningBackground: {
    background: "rgba(255, 152, 0, 0.2)"
  },
  dangerBackground: {
    background: "rgba(244, 67, 54, 0.2)"
  },
  successBackground: {
    background: "rgba(76, 175, 80, 0.2)"
  },
  infoBackground: {
    background: "rgba(0, 188, 212, 0.2)"
  },
  roseBackground: {
    background: "rgba(233, 30, 99, 0.2)"
  },
  grayBackground: {
    background: "rgba(221, 221, 221, 0.2)"
  }
};

const useStyles = makeStyles(customLinearProgressStyle);

export default function CustomLinearProgress(props) {
  const classes = useStyles();
  const { color, ...rest } = props;
  return (
    <LinearProgress
      {...rest}
      classes={{
        root: classes.root + " " + classes[color + "Background"],
        bar: classes.bar + " " + classes[color]
      }}
    />
  );
}

CustomLinearProgress.defaultProps = {
  color: "gray"
};

CustomLinearProgress.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ])
};
