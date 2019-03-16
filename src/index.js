import React from 'react';
import ReactDom from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css'
ReactDom.render(<App/>,document.getElementById('root'));

serviceWorker.register();