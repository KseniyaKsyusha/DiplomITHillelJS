import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Login from './containers/Login';
import Products from './containers/Products'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <Products/>
    {/* <Login /> */}

  </React.StrictMode>
);


