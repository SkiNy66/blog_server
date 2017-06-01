import React, { DOM } from 'react';
import _ from 'lodash';

import BlogItem from '../ui/BlogItem.js'

const items = [ 
  { 
    image: {
      src: 'http://www.seoded.ru/beginner/img/meta-tegi.jpg',
      width: '50px',
      height: '50px',
      alt: 'pic'
    },
    id: '1',
    text: 'Sometext1'
  },
  { 
    image: {
      src: 'http://www.seoded.ru/beginner/img/meta-tegi.jpg',
      width: '50px',
      height: '50px',
      alt: 'pic'
    },
    id: '2',
    text: 'Sometext2'
  },
  { 
    image: {
      src: 'http://www.seoded.ru/beginner/img/meta-tegi.jpg',
      width: '50px',
      height: '50px',
      alt: 'pic'
    },
    id: '3',
    text: 'Sometext3'
  }
];

class BlogList extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {items};
  }
  
  render() {
    const {items} = this.state;
    const aaa = items.map((item) =>
      React.createElement(BlogItem, {key: item.id, ...item})
     // <BlogItem key={a.id} {...a} />
    );

    return <div>{aaa}</div>
  }
};

export default BlogList;
