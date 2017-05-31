import React, { DOM } from 'react';
import _ from 'lodash';

import Image from './Image'
import TextBox from './TextBox'

const BlogItem = ({image, text}) => (
  <div>
    <Image {...image} />
    <br/>
    <TextBox>{text}</TextBox>
  </div>
);

export default BlogItem;
