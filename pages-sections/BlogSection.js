import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import BlogList from "components/BlogList/BlogList.js";

import { section, title } from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/imagesStyles.js";

const blogSectionStyle = {
  section: {
    backgroundColor: "#fafafa",
    padding: "2em 0 1.5em",
    ...section,
  },
  title: {
    ...title,
    textAlign: "center",
  },
  ...imagesStyle,
  justifyCenter: {
    justify: "center",
  },
};

const useStyles = makeStyles(blogSectionStyle);

export default function BlogSection({ posts }) {
  const classes = useStyles();
  return (
    <div className={classes.section} id="blog-section">
      <GridContainer justify="center" style={{ marginBottom: "10px" }}>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Latest releases</h2>
        </GridItem>
      </GridContainer>
      <div>
        <BlogList posts={posts} list_slice={3} />
      </div>
      <div className>
        <Link underline="hover" href="/blog">
          <Button simple size="lg" color="transparent" target="_blank">
            See all
          </Button>
        </Link>
      </div>
    </div>
  );
}
