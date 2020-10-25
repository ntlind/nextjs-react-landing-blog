import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title,
} from "assets/jss/nextjs-material-kit.js";

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px",
  },
  iconWrapper: {
    margin: "2em 0 .5em"
  },
  primary: {
    color: primaryColor,
  },
  warning: {
    color: warningColor,
  },
  danger: {
    color: dangerColor,
  },
  success: {
    color: successColor,
  },
  info: {
    color: infoColor,
  },
  rose: {
    color: roseColor,
  },
  gray: {
    color: grayColor,
  },
  descriptionWrapper: {
    color: grayColor,
  },
  title : {
    marginTop: "0em",
    ...title
  },
  description: {
    color: grayColor,
    overflow: "hidden",
    margin: "0 1em 0 1em",
  },
  iconVertical: {
    width: "3.5em",
    height: "3.5em",
  },
};

const useStyles = makeStyles(infoStyle);

export default function InfoArea(props) {
  const classes = useStyles();
  const { title, description, iconColor, vertical } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical,
  });
  const iconClasses = classNames({
    [classes.iconVertical]: vertical,
  });
  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        <props.icon className={iconClasses} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray",
};

InfoArea.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  vertical: PropTypes.bool,
};
