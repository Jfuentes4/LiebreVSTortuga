import Animal from './Animal.js';

class Hare extends Animal {
  constructor (identifier) {
    super(identifier);
  }

  run = (dado) => {
    if (dado > 20 && dado <= 40) this._jumpBig();
    else if (dado > 40 && dado <= 50) this._slideBig();
    else if (dado > 50 && dado <= 85) this._jumpSmall();
    else if (dado > 85) this._slideSmall();
    else this._sleep();
  }

  _sleep = () => {
    console.log('La liebre esta durmiento');
  }

  _jumpBig = () => {
    this._progress += 9;
  }

  _jumpSmall = () => {
    this._progress += 1;
  }

  _slideBig = () => {
    this._progress -= 12;
  }

  _slideSmall = () => {
    this._progress -= 2;
  }
}

export default Hare;
