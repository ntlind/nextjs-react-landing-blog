import React, { Component } from "react";
import Link from "next/link";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import {
  container,
  lightGrayColor,
  grayColor,
} from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/imagesStyles.js";

const blogListStyle = {
  container,
  postTitle: {
    fontWeight: "500",
    margin: ".2em 0 1em 0",
    fontSize: "1.3rem"
  },
  postDescription: {
    color: grayColor,
    fontSize: "1rem",
    minHeight: "3.6em"
  },
  postDate: {
    color: lightGrayColor,
    margin: "15px 0 15px",
  },
  imageStyle: {
    flex: 1,
    width: 350,
    height: 250,
    resizeMode: "contain",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px 20px 20px 20px",
  },
  cardStyle: {
    borderBottom: ".6em transparent solid",
    "&:hover": {
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.12), 0 6px 30px 5px rgba(0, 0, 0, 0.16), 0 8px 10px -5px rgba(0, 0, 0, 0.3)",
      borderBottom: ".6em #00b0ff solid",
      backgroundColor: "#FFF",
    },
  },
};

const useStyles = makeStyles(blogListStyle);

export default function BlogList({ posts, list_slice }) {
  const classes = useStyles();

  if (typeof list_slice === "undefined") {
    var list_slice = posts.length;
  }

  var filtered_posts = posts.slice(0, list_slice);

  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <GridContainer justify="center">
          {filtered_posts.map(
            ({ frontmatter: { title, description, date, image }, slug }) => (
              <GridItem
                xs={12}
                sm={12}
                md={4}
                className={classes.itemGrid}
                key={slug}
              >
                <Link href={"/blog/[slug]"} as={`/blog/${slug}`}>
                  <Card className={classes.cardStyle} elevation={3}>
                    <CardActionArea>
                      <img src={image} className={classes.imageStyle} />
                      <CardContent>
                        <h3 className={classes.postTitle}>{title}</h3>
                        <p className={classes.postDescription}>{description}</p>
                      </CardContent>
                    </CardActionArea>
                    <div className={classes.postDate}>{date}</div>
                  </Card>
                </Link>
              </GridItem>
            )
          )}
        </GridContainer>
      </div>
    </div>
  );
}
