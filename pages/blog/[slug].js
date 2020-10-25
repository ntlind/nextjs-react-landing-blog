import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import SEO from "components/SEO/SEO.js";

// styles
import {
  container,
  heroTitle,
  section,
  raisedDiv,
  title,
  heroDescription,
  ThinGrayLine
} from "assets/jss/nextjs-material-kit.js";
import imagesStyles from "assets/jss/imagesStyles.js";

const useStyles = makeStyles({
  container,
  heroTitle,
  section: {
    ...section,
    textAlign: "left",
    paddingBottom: "4em",
    paddingTop: "1em"
  },
  heroDescription,
  heroDate: {
    color: "#DDD",
    fontWeight: "100",
    fontSize: ".9em",
  },
  raisedDiv,
  paragraphStyle: {
    padding: "1em 0 0",
    margin: "0 0"
  },
  blockQuoteStyle: {},
  codeStyle: {
    margin: "0 0 4em 0",
  },
  inLineCodeStyle: {
    color: "#333",
    padding: "2px 6px 2px 6px",
    backgroundColor: "#e1f5fe",
    marginBottom: "20px",
    maxWidth: "100%",
  },
  headingStyle: {
    ...title,
    margin: "2.5em 0 0",
  },
  smallHeadingStyle: {
    ...title,
    margin: "1.5em 0 0",
  },
  imageDivStyle: {
    display: "block",
    textAlign: "center",
    margin: "2em auto 2em auto",
  },
  imageStyle: {
    ...imagesStyles.imgFluid,
    marginBottom: "1em",
  },
});

export default function Post({ content, frontmatter }) {
  const classes = useStyles();

  const CodeBlock = ({ language, value }) => {
    return (
      <div className={classes.codeStyle}>
        <SyntaxHighlighter
          showLineNumbers
          language={language}
          style={materialDark}
          lineProps={{
            style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
          }}
          wrapLines={true}
        >
          {value}
        </SyntaxHighlighter>
      </div>
    );
  };

  function BlockQuoteStyle(props) {
    return (
      <blockquote className={classes.blockQuoteStyle}>
        {props.children}
      </blockquote>
    );
  }

  const ParagraphStyle = (props) => (
    <p className={classes.paragraphStyle}>{props.children}</p>
  );

  const InLineCodeStyle = (props) => (
    <code className={classes.inLineCodeStyle}>{props.children}</code>
  );

  const HeadingStyle = (props) => {
    switch (props.level) {
      case 1:
        return <h1 className={classes.headingStyle}>{props.children}</h1>;
      case 2:
        return <h2 className={classes.headingStyle}>{props.children}</h2>;
      case 3:
        return <h3 className={classes.smallHeadingStyle}>{props.children}</h3>;
      case 4:
        return <h4 className={classes.smallHeadingStyle}>{props.children}</h4>;
      case 5:
        return <h5 className={classes.smallHeadingStyle}>{props.children}</h5>;
      case 6:
        return <h6 className={classes.smallHeadingStyle}>{props.children}</h6>;

      // default to H6 if you try to get a heading of level 0 or 7, as an example
      default:
        return <h6 className={smallHeadingStyle}>{props}</h6>;
    }
  };

  function ImageStyle(props) {
    return (
      <div className={classes.imageDivStyle}>
        <img {...props} className={classes.imageStyle} />
      </div>
    );
  }
  const ListStyle = (props) => (
    <li className={classes.listStyle}>{props.children}</li>
  );

  const renderers = {
    code: CodeBlock,
    blockquote: (props) => <BlockQuoteStyle {...props} />,
    paragraph: (props) => <ParagraphStyle {...props} />,
    inlineCode: (props) => <InLineCodeStyle {...props} />,
    heading: (props) => <HeadingStyle {...props} />,
    image: (props) => <ImageStyle {...props} />,
    listItem: (props) => <ListStyle {...props} />,
  };

  return (
    <div id="top" style={{ background: "#ffffff" }}>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Header
        color="transparent"
        brand="Your Brand Here"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 150,
          color: "black",
        }}
      />
      <Parallax
        filter
        responsive
        small
        image={frontmatter.image}
        image_alt={frontmatter.image.alt_text}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} color="#FFFFFF">
              <h1 className={classes.heroTitle}>{frontmatter.title}</h1>
              <p className={classes.heroDescription}>
                {frontmatter.description}
              </p>
              <p className={classes.heroDate}>Published {frontmatter.date}</p>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.raisedDiv}>
        <div className={classes.section}>
          <div className={classes.container}>
            <ReactMarkdown
              className={classes.markdownStyle}
              escapeHtml={false}
              source={content}
              renderers={renderers}
            />
          </div>
        </div>
        <ThinGrayLine />
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("content");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join("content/", slug + ".md"))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  // Convert post date to format: Month day, Year
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = data.date.toLocaleDateString("en-US", options);

  const frontmatter = {
    ...data,
    date: formattedDate,
  };

  return {
    props: {
      content: `${content}`,
      frontmatter,
    },
  };
}
