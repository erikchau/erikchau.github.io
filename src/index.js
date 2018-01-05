import React from 'react';
import {render} from 'react-dom';

import Portfolio from "./client/component/portfolio.jsx"

import data from "./portfolio.json"

render(
  <Portfolio data={data}/>
  , document.getElementById('portfolio')
)
