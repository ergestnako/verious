import React from "react";

let inlinedStyles = "";
if (process.env.NODE_ENV === "production") {
  try {
    inlinedStyles = require("!raw-loader!../public/styles.css");
  } catch (e) {
    console.log(e);
  }
}

const HTML = props => {
  let css;
  if (process.env.NODE_ENV === "production") {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: inlinedStyles }}
      />
    );
  }

  return (
    <html lang="en" className="vs-html">
      <head>
        {props.headComponents}
        {css}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
