import React, { Component } from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import BlogList from "components/BlogList/BlogList.js";
import SEO from "components/SEO/SEO.js";

import {
  raisedDiv,
  container,
  section,
  heroTitle,
  heroDescription,
  title,
  grayColor,
} from "assets/jss/nextjs-material-kit.js";

import matter from "gray-matter";

const useStyles = makeStyles({
  container,
  section,
  heroCategory: {
    color: "#DDD",
    fontWeight: "100",
  },
  linkSection: {
    "&:hover,&:focus": {
      textDecoration: "underline",
    },
  },
  heroTitle: {
    ...heroTitle,
    fontSize: "2.5em",
    margin: "0",
    "&:hover,&:focus": {
      textDecoration: "underline",
    },
  },
  heroDescription,
  raisedDiv,
  title,
});

export default function BlogPage({ posts }) {
  function getFeaturedPost(posts) {
    // if multiple posts are marked as featured, choose the latest one
    return posts.filter((post) => post.frontmatter.featured === 1)[0];
  }

  const featured_post = getFeaturedPost(posts);

  const classes = useStyles();
  return (
    <div id="top">
      <SEO
        title="All Posts"
        description="[your description here]"
      />
      <Header
        color="transparent"
        brand="Your Brand Here"
        rightLinks={<HeaderLinks noBlog />}
        fixed
        changeColorOnScroll={{
          height: 150,
          color: "black",
        }}
      />
      <Parallax
        filter
        responsive
        image={featured_post.frontmatter.image}
        image_alt={featured_post.frontmatter.image_alt}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} color="#FFFFFF">
              <p className={classes.heroCategory}>Featured</p>
              <Link
                underline="hover"
                href={"/blog/[slug]"}
                as={`/blog/${featured_post.slug}`}
              >
                <h1 className={classes.heroTitle}>
                  {featured_post.frontmatter.title}
                </h1>
              </Link>
              <p className={classes.heroDescription}>
                {featured_post.frontmatter.description}
              </p>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.raisedDiv}>
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title}>All Posts</h2>
            </GridItem>
          </GridContainer>
          <BlogList posts={posts} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/content`);

  const posts = files
    .map((filename) => {
      const markdownWithMetadata = fs
        .readFileSync(`content/${filename}`)
        .toString();

      const { data } = matter(markdownWithMetadata);

      // Convert post date to format: Month day, Year
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = data.date.toLocaleDateString("en-US", options);

      const frontmatter = {
        ...data,
        date: formattedDate,
      };

      return {
        slug: filename.replace(".md", ""),
        frontmatter,
      };
    })
    .sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );

  return {
    props: {
      posts,
    },
  };
}
