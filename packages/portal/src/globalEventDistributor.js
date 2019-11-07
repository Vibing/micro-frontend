import CustomEvent from 'custom-event';

export class GlobalEventDistributor {
  constructor() {
    this.stores = [];
  }

  registerStore(store) {
    this.stores.push(store);
  }

  changeMainState(state) {
    this.stores.forEach(s => s.changeMainState(state));
  }
}
