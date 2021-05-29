// This file is connected to index html (its like you make append , what ever pararaph you add it will appear in the Html)

import React from 'react';
// const React = require('react')
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
// here means append App to html
// so in app typicly there will be one div that will be inside the root div of index.js
// if you dont want a div in app , just use fragment <> </> so you still using one element App without dealing with the div space (typically div has margin border .. etc) with fragment u avoide this  
     <App />,
  document.getElementById('root'))
  ;

