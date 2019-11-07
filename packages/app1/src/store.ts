import { observable, action, configure } from 'mobx';

configure({
  enforceActions: 'observed'
});

class Store {
  @observable count = 0;

  @action changeState = state => {
    console.log(state);

    Object.assign(this, state);
  };

  changeMainState(state) {
    this.changeState(state);
  }
}

const mainStore = new Store();

//pub sub同步所有模块store
window.addEventListener('spa@changeMainState', (e: any) => {
  console.log('1-->', e);

  mainStore.changeMainState(e.detail);
});

export default mainStore;
