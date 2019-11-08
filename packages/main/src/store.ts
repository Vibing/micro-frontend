import { observable, action, configure, runInAction } from 'mobx';

configure({
  enforceActions: 'observed'
});

const aa = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

class Store {
  @observable count = 0;

  @action changeState = state => {
    Object.assign(this, state);
  };

  @action
  async getList() {
    const res = await aa();
    if (res) {
      runInAction(() => {
        this.count = this.count + 5;
      });
    }
  }
}

export default new Store();
