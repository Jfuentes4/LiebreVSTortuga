import Race from './Race.js';

class Main {
  constructor () {
    this._race = new Race(90);
    this._race.start();
  }
}

var main = new Main();
