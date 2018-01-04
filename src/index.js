import React from 'react';
import {render} from 'react-dom';

import Portfolio from "./client/component/portfolio.jsx"

import data from "./portfolio.json"

console.log(data)

render(
  <Portfolio data={data}/>
  , document.getElementById('portfolio')
)
