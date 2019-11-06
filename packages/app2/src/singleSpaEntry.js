import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Root from './root.component';

function domElementGetter() {
  let el = document.getElementById('sub-module-wrap');
  if (!el) {
    el = document.createElement('div');
    el.id = 'sub-module-wrap';
  }
  let timer = null;
  timer = setInterval(() => {
    if (document.querySelector('#content-wrap')) {
      document.querySelector('#content-wrap').appendChild(el);
      clearInterval(timer);
    }
  }, 100);

  return el;
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter
});

export function bootstrap(props) {
  return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  return reactLifecycles.mount(props);
}

export function unmount(props) {
  return reactLifecycles.unmount(props);
}
