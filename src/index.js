import 'babel-polyfill';

import './scss/main.scss';

const DOM = document.getElementById('main');

const start = () => {
  DOM.innerHTML = 'YO';
};

start();
