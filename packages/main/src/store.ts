import { observable, action, configure, runInAction } from 'mobx';
import CustomEvent from 'custom-event';

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
  mainStore.changeMainState(e.detail);
});

export default mainStore;
