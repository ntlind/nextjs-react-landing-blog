import React from "react";
import Document, { Head, Main, NextScript, Html } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="Your name here" //TODO update for your page
            content="Your description here."
          />
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href={"/images/favicon.svg"} />
          <link rel="apple-touch-icon" sizes="76x76" href={"/images/favicon.svg"} />
          {/* Fonts and icons */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons|Lato:300,400,500,700|Roboto+Slab:300,400,500,700"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
          />
        </Head>
        <body>
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};

export default MyDocument;
