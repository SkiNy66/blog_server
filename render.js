import React from 'react';
import ReactDOMServer from 'react-dom/server';
import BlogList from './components/containers/BlogList.jsx';

const result = ReactDOMServer.renderToString(
// const result = ReactDOMServer.renderToStaticMarkup(
  React.createElement(BlogList)
);

export default result;
