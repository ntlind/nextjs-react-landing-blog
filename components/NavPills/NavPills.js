import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import {
  hexToRGBAlpha,
  roseColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "assets/jss/nextjs-material-kit.js";

const navPillsStyle = theme => ({
  root: {
    marginTop: "20px",
    paddingLeft: "0",
    marginBottom: "0",
    overflow: "visible !important",
    lineHeight: "24px",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "500",
    position: "relative",
    display: "block",
    color: "inherit"
  },
  flexContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "wrap"
    }
  },
  displayNone: {
    display: "none !important"
  },
  fixed: {
    overflow: "visible !important"
  },
  horizontalDisplay: {
    display: "block"
  },
  pills: {
    float: "left",
    position: "relative",
    display: "block",
    borderRadius: "30px",
    minWidth: "100px",
    textAlign: "center",
    transition: "all .3s",
    padding: "10px 15px",
    color: "#555555",
    height: "auto",
    opacity: "1",
    maxWidth: "100%",
    margin: "0 5px"
  },
  pillsWithIcons: {
    borderRadius: "4px"
  },
  tabIcon: {
    width: "30px",
    height: "30px",
    display: "block",
    margin: "15px 0 !important",
    "&, & *": {
      letterSpacing: "normal !important"
    }
  },
  horizontalPills: {
    width: "100%",
    float: "none !important",
    "& + button": {
      margin: "10px 0"
    }
  },
  contentWrapper: {
    marginTop: "20px",
    textAlign: "left",
    color: "#000000",
  },
  primary: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: primaryColor,
      boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${hexToRGBAlpha(
        primaryColor,
        0.4
      )}`
    }
  },
  info: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: infoColor,
      boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${hexToRGBAlpha(
        infoColor,
        0.4
      )}`
    }
  },
  success: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: successColor,
      boxShadow: `0 2px 2px 0 ${hexToRGBAlpha(
        successColor,
        0.14
      )}, 0 3px 1px -2px ${hexToRGBAlpha(
        successColor,
        0.2
      )}, 0 1px 5px 0 ${hexToRGBAlpha(successColor, 0.12)}`
    }
  },
  warning: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: warningColor,
      boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${hexToRGBAlpha(
        warningColor,
        0.4
      )}`
    }
  },
  danger: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: dangerColor,
      boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${hexToRGBAlpha(
        dangerColor,
        0.4
      )}`
    }
  },
  rose: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: roseColor,
      boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${hexToRGBAlpha(
        roseColor,
        0.4
      )}`
    }
  },
  alignCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  tabWrapper: {
    color: "inherit",
    position: "relative",
    fontSize: "12px",
    lineHeight: "24px",
    fontWeight: "500",
    textTransform: "uppercase",
    "&,& *": {
      letterSpacing: "normal"
    }
  }
});

const useStyles = makeStyles(navPillsStyle);

export default function NavPills(props) {
  const [active, setActive] = React.useState(props.active);
  const handleChange = (event, active) => {
    setActive(active);
  };
  const handleChangeIndex = index => {
    setActive(index);
  };
  const classes = useStyles();
  const { tabs, direction, color, horizontal, alignCenter } = props;
  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined
  });
  const tabButtons = (
    <Tabs
      classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone
      }}
      value={active}
      onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop, key) => {
        var icon = {};
        if (prop.tabIcon !== undefined) {
          icon["icon"] = <prop.tabIcon className={classes.tabIcon} />;
        }
        const pillsClasses = classNames({
          [classes.pills]: true,
          [classes.horizontalPills]: horizontal !== undefined,
          [classes.pillsWithIcons]: prop.tabIcon !== undefined
        });
        return (
          <Tab
            label={prop.tabButton}
            key={key}
            {...icon}
            classes={{
              root: pillsClasses,
              selected: classes[color],
              wrapper: classes.tabWrapper
            }}
          />
        );
      })}
    </Tabs>
  );
  const tabContent = (
    <div className={classes.contentWrapper}>
      <SwipeableViews
        axis={direction === "rtl" ? "x-reverse" : "x"}
        index={active}
        onChangeIndex={handleChangeIndex}
      >
        {tabs.map((prop, key) => {
          return (
            <div className={classes.tabContent} key={key}>
              {prop.tabContent}
            </div>
          );
        })}
      </SwipeableViews>
    </div>
  );
  return horizontal !== undefined ? (
    <GridContainer>
      <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
      <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
    </GridContainer>
  ) : (
    <div>
      {tabButtons}
      {tabContent}
    </div>
  );
}

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};

NavPills.propTypes = {
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node
    })
  ).isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ]),
  direction: PropTypes.string,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object
  }),
  alignCenter: PropTypes.bool
};
