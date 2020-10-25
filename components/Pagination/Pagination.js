import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import {
  hexToRGBAlpha,
  grayColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor
} from "assets/jss/nextjs-material-kit.js";

const paginationStyle = {
  pagination: {
    display: "inline-block",
    paddingLeft: "0",
    margin: "0 0 20px 0",
    borderRadius: "4px"
  },
  paginationItem: {
    display: "inline"
  },
  paginationLink: {
    ":first-of-type": {
      marginleft: "0"
    },
    letterSpacing: "unset",
    border: "0",
    borderRadius: "30px !important",
    transition: "all .3s",
    padding: "0px 11px",
    margin: "0 3px",
    minWidth: "30px",
    height: "30px",
    minHeight: "auto",
    lineHeight: "30px",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    background: "transparent",
    position: "relative",
    float: "left",
    textDecoration: "none",
    boxSizing: "border-box",
    "&,&:hover,&:focus": {
      color: grayColor
    },
    "&:hover,&:focus": {
      zIndex: "3",
      backgroundColor: "#eee",
      borderColor: "#ddd"
    },
    "&:hover": {
      cursor: "pointer"
    }
  },
  primary: {
    "&,&:hover,&:focus": {
      backgroundColor: primaryColor,
      borderColor: primaryColor,
      color: "#FFFFFF",
      boxShadow: `0 4px 5px 0 ${hexToRGBAlpha(
        primaryColor,
        0.14
      )}, 0 1px 10px 0 ${hexToRGBAlpha(
        primaryColor,
        0.12
      )}, 0 2px 4px -1px ${hexToRGBAlpha(primaryColor, 0.2)}`
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  info: {
    "&,&:hover,&:focus": {
      backgroundColor: infoColor,
      borderColor: infoColor,
      color: "#FFFFFF",
      boxShadow: `0 4px 5px 0 ${hexToRGBAlpha(
        infoColor,
        0.14
      )}, 0 1px 10px 0 ${hexToRGBAlpha(
        infoColor,
        0.12
      )}, 0 2px 4px -1px ${hexToRGBAlpha(infoColor, 0.2)}`
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  success: {
    "&,&:hover,&:focus": {
      backgroundColor: successColor,
      borderColor: successColor,
      color: "#FFFFFF",
      boxShadow: `0 4px 5px 0 ${hexToRGBAlpha(
        successColor,
        0.14
      )}, 0 1px 10px 0 ${hexToRGBAlpha(
        successColor,
        0.12
      )}, 0 2px 4px -1px ${hexToRGBAlpha(successColor, 0.2)}`
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  warning: {
    "&,&:hover,&:focus": {
      backgroundColor: warningColor,
      borderColor: warningColor,
      color: "#FFFFFF",
      boxShadow: `0 4px 5px 0 ${hexToRGBAlpha(
        warningColor,
        0.14
      )}, 0 1px 10px 0 ${hexToRGBAlpha(
        warningColor,
        0.12
      )}, 0 2px 4px -1px ${hexToRGBAlpha(warningColor, 0.2)}`
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  danger: {
    "&,&:hover,&:focus": {
      backgroundColor: dangerColor,
      borderColor: dangerColor,
      color: "#FFFFFF",
      boxShadow: `0 4px 5px 0 ${hexToRGBAlpha(
        dangerColor,
        0.14
      )}, 0 1px 10px 0 ${hexToRGBAlpha(
        dangerColor,
        0.12
      )}, 0 2px 4px -1px ${hexToRGBAlpha(dangerColor, 0.2)}`
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  rose: {
    "&,&:hover,&:focus": {
      backgroundColor: roseColor,
      borderColor: roseColor,
      color: "#FFFFFF",
      boxShadow: `0 4px 5px 0 ${hexToRGBAlpha(
        roseColor,
        0.14
      )}, 0 1px 10px 0 ${hexToRGBAlpha(
        roseColor,
        0.12
      )}, 0 2px 4px -1px ${hexToRGBAlpha(roseColor, 0.2)}`
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  disabled: {
    "&,&:hover,&:focus": {
      color: "#777",
      cursor: "not-allowed",
      backgroundColor: "#fff",
      borderColor: "#ddd"
    }
  }
};

const useStyles = makeStyles(paginationStyle);

export default function Pagination(props) {
  const classes = useStyles();
  const { pages, color } = props;
  return (
    <ul className={classes.pagination}>
      {pages.map((prop, key) => {
        const paginationLink = classNames({
          [classes.paginationLink]: true,
          [classes[color]]: prop.active,
          [classes.disabled]: prop.disabled
        });
        return (
          <li className={classes.paginationItem} key={key}>
            {prop.onClick !== undefined ? (
              <Button onClick={prop.onClick} className={paginationLink}>
                {prop.text}
              </Button>
            ) : (
              <Button
                onClick={() => alert("you've clicked " + prop.text)}
                className={paginationLink}
              >
                {prop.text}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

Pagination.defaultProps = {
  color: "primary"
};

Pagination.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      text: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["PREV", "NEXT", "..."])
      ]).isRequired,
      onClick: PropTypes.func
    })
  ).isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};
