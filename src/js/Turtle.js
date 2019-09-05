import Animal from './Animal.js';

class Turtle extends Animal {
  constructor (identifier) {
    super(identifier);
  }

  run = (dado) => {
    if (dado > 50 && dado <= 80) this._slowStep();
    else if (dado > 80) this._slide();
    else this._speedStep();
  }

  _speedStep = () => {
    this._progress += 3;
  }

  _slowStep = () => {
    this._progress += 1;
  }

  _slide = () => {
    this._progress -= 6;
  }
}

export default Turtle;
