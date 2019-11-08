import * as singleSpa from 'single-spa';
import { loadApp } from './helper';

const project_config = [
  {
    isBase: true,
    name: 'main',
    version: '1.0.0',
    hashPrefix: '',
    entry: 'http://localhost:9001/singleSpaEntry.js',
    store: 'http://localhost:9001/store.js'
  }
];

async function init() {
  const loadingPromises = [];

  // main模块
  loadingPromises.push(
    loadApp(
      'main',
      '',
      'http://localhost:9001/singleSpaEntry.js',
      'http://localhost:9001/store.js'
    )
  );

  loadingPromises.push(
    loadApp(
      'app1',
      '/app1',
      'http://localhost:9002/singleSpaEntry.js',
      'http://localhost:9001/store.js'
    )
  );

  loadingPromises.push(
    loadApp(
      'app2',
      '/app2',
      'http://localhost:9003/singleSpaEntry.js',
      'http://localhost:9001/store.js'
    )
  );

  // // app2: The URL "/app2/..." is being redirected to "http://localhost:9002/..." this is done by the webpack proxy (webpack.config.js)
  // loadingPromises.push(loadApp('app2', '/app2', '/app2/singleSpaEntry.js', '/app2/store.js', globalEventDistributor));

  // // app3: The URL "/app3/..." is being redirected to "http://localhost:9003/..." this is done by the webpack proxy (webpack.config.js)
  // loadingPromises.push(loadApp('app3', '/app3', '/app3/singleSpaEntry.js', null, null)); // does not have a store, so we pass null

  // // app3: The URL "/app4/..." is being redirected to "http://localhost:9004/..." this is done by the webpack proxy (webpack.config.js)
  // loadingPromises.push(loadApp('app4', '/app4', '/app4/singleSpaEntry.js', null, null)); // does not have a store, so we pass null

  // // app5: The URL "/app5/..." is being redirected to "http://localhost:9005/..." this is done by the webpack proxy (webpack.config.js)
  // loadingPromises.push(loadApp('app5', '/app5', '/app5/singleSpaEntry.js', '/app5/store.js', globalEventDistributor));

  // wait until all stores are loaded and all apps are registered with singleSpa
  await Promise.all(loadingPromises);

  singleSpa.start();
}

init();
