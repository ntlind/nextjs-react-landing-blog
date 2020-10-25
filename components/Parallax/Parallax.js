import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

const parallaxStyle = (theme) => ({
  parallax: {
    height: "90vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
  },
  filterLight: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.15)",
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.55)",
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
  small: {
    height: "35em",
  },
  parallaxResponsive: {
    [theme.breakpoints.down("md")]: {
      minHeight: "660px",
    },
  },
});

const useStyles = makeStyles(parallaxStyle);

export default function Parallax(props) {
  let windowScrollTop;
  const [transform, setTransform] = React.useState("translate3d(0,0px,0)");
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };
  const {
    filter,
    filterLight,
    className,
    children,
    style,
    image,
    image_alt,
    small,
    responsive,
  } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.filterLight]: filterLight,
    [classes.small]: small,
    [classes.parallaxResponsive]: responsive,
    [className]: className !== undefined,
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: "url(" + image + ")",
        transform: transform,
      }}
    >
      {children}
      <span role="img" aria-label={image_alt}>
        {" "}
      </span>
    </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  filterLight: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  image_alt: PropTypes.string,
  small: PropTypes.bool,
  responsive: PropTypes.bool,
};
