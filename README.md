# NextJS & React: Landing Page / Blog

 ![version](https://img.shields.io/badge/version-1.1.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) 

NextJS Landing Page is a fork of the [NextJS Material Kit](https://demos.creative-tim.com/nextjs-material-kit/?ref=njsmk-readme) with a few new features:

- Added an entirely new blog functionality, which takes markdown files located in `/pages/blog/*` and converts them to HTML using Next.JS's [dynamic routing](https://nextjs.org/docs/routing/dynamic-routes). The blog posts are displayed using a custom `BlogList.js` component within `components/BlogList/BlogList.js`. `BlogList` makes it easy to style your blog posts into various components:
  - ![Demonstration of the new BlogList component](https://github.com/quantilegroup/nextjs-landing-page/blob/main/public/images/blog_example.gif?raw=true)
- Included the ability to use `feature: 1` frontmatter to determine which posts populate the header of the main blog page (in `pages/blog/[slug]`)
- Wrote custom renderers in `[slug].js` to format the markdown that's passed through (`react-markdown`)[https://github.com/remarkjs/react-markdown]
  - ![Demonstration of new renderers](https://github.com/quantilegroup/nextjs-landing-page/blob/main/public/images/custom_renderers.JPG?raw=true)
- Added new `CalendlyButton` button that allows visitors to schedule time with you through [Calendly](calendly.com) without leaving your site
  - ![Demo of new Calendly widget](https://github.com/quantilegroup/nextjs-landing-page/blob/main/public/images/calendly_example.gif?raw=true)
- Added a new sitemap generator using `nextjs-sitemap-generator` to improve SEO
- Added a new `SEO.js` component to add `<meta>` tags to every page to improve SEO scores

<br />  
<br />  

Other minor changes relative to [NextJS Material Kit](https://demos.creative-tim.com/nextjs-material-kit/?ref=njsmk-readme) include:
- Made styling updates throughout, with a focus on user accessibility
- Moved static files to `public` per the latest Next.JS updates, including a new robot.txt template
- Refactored most scripts within `jss` to sit within their respective components for convenience when editing CSS-in-JS
- Standardized some important CSS classes within `nextjs-material-kit.js`
- Add new accessibility features, such as adding `alt` options for parallax images
- Loaded Font Awesome icons from Cloudflare's cache for improved load speed

<br />  
<br />  

This website was developed using [NextJS](https://nextjs.org/?), [Material-UI](https://material-ui.com/?), and [Material Kit React](https://www.creative-tim.com/product/material-kit-react?) by Creative Tim. We had a lot of fun building with these templates, and we hope you will too. Special thanks to Creative Tim, the Vercel team, and the amazing React community that created our new dependencies:
- (react-markdown)[https://github.com/remarkjs/react-markdown]
- (react-calendly)[https://www.npmjs.com/package/react-calendly]
- (react-scroll)[https://www.npmjs.com/package/react-scroll]
- (nextjs-sitemap-generator)[https://www.npmjs.com/package/nextjs-sitemap-generator]
- SEO component created by (JoseRFelix)[https://github.com/JoseRFelix/nextjs-starter-blog/blob/master/components/Seo.js]

<br />  
<br />  

## About NextJS Material Kit (from the author)
**[NextJS Material Kit](https://demos.creative-tim.com/nextjs-material-kit/?)** makes use of light, surface and movement. It uses a deliberate color choice, edge-to-edge imagery and large scale typography. The general layout resembles sheets of paper following multiple different layers, so that the depth and order is obvious. The navigation stays mainly on the left and the actions on the right.

This new design has elements that have been the result of research regarding ink and paper and the way objects and materials interact in real life. The result is a beautiful and consistent set of elements that can get you started with your next project. NextJS Material Kit is a great tool if you are looking to create a web presence for your web application and need to be consistent, leaving the impression of visually similar elements. It is also a great resource in its own right, looking gorgeous and helping you build your web pages.

**[NextJS Material Kit](https://demos.creative-tim.com/nextjs-material-kit/?ref=njsmk-readme)** was built with the help of [nextjs](https://nextjs.org/?ref=creativetim) and it uses a framework built by our friends from **[Material-UI](https://material-ui.com/?ref=creativetim)**, who did an amazing job creating the backbone for the material effects, animations, ripples and transitions. Big thanks to this team for the effort and forward thinking they put into it.

<br />  
<br />  

## Quick start

- Clone the repo: `git clone https://github.com/quantilegroup/nextjs-landing-page.git`.
- Switch directories: `cd nextjs-landing-page.git`
- Install dependencies: `npm install`
- To develop: run `npm run dev` and navigate to `http://localhost:3000/`
- To create static html files for your server: `npm run export`
