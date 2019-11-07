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

  changeMainState = state => {
    this.changeState(state);
  };
}

export default new Store();
