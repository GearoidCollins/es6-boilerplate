import 'babel-polyfill';

import './css/main.css';

const DOM = document.getElementById('main');

const start = () => {
  DOM.innerHTML = 'YO';
};

start();
