import * as singleSpa from 'single-spa'; // waiting for this to be merged: https://github.com/CanopyTax/single-spa/pull/156

export function hashPrefix(prefix) {
  if (!prefix) {
    return () => true;
  }
  return function(location) {
    return location.hash.startsWith(`#${prefix}`);
  };
}

export async function loadApp(name, hash, appURL, storeURL) {
  let storeModule = {};

  try {
    storeModule = storeURL ? await SystemJS.import(storeURL) : null;
    storeModule = storeModule ? storeModule.default : null;
  } catch (e) {
    console.log(`无法加载mainStore.`, e);
  }

  singleSpa.registerApplication(
    name,
    () => SystemJS.import(appURL),
    hashPrefix(hash),
    {
      mainStore: storeModule
    }
  );
}
