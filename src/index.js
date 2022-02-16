import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/tachyons/css/tachyons.min.css";
import "swiper/css/bundle";
import App from './App';
import './index.css';

ReactDOM.render(<React.Fragment><BrowserRouter><App /></BrowserRouter></React.Fragment>, document.getElementById('root'), console.log("Render Successfully"))