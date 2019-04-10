import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import 'font-awesome/css/font-awesome.min.css';
import './index.css';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
