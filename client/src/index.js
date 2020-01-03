import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import ScrollToTop from './javascript/ScrollToTop';



ReactDOM.render(
  <Router>
    <ScrollToTop>
    <App />
    </ScrollToTop>
  </Router>, document.getElementById('root'));
