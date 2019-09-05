import Dice from './Dice.js';
import Hare from './Hare.js';
import Turtle from './Turtle.js';

class Race {
  constructor (distance) {
    this._distance = Number(distance);
    this._dice = new Dice(100);
  }

  start = () => {
    let corredor1 = new Hare('Liebre');
    let corredor2 = new Turtle('Tortuga');

    do {
      corredor1.run(this._dice.throw());
      console.log('El corredor ' + corredor1.id + ' se encuentra en el metro ' + corredor1.progress);
      corredor2.run(this._dice.throw());
      console.log('El corredor ' + corredor2.id + ' se encuentra en el metro ' + corredor2.progress);


    } while (corredor1.progress < this._distance && corredor2.progress < this._distance)

    if(corredor1.progress >= this._distance && corredor2.progress >= this._distance) console.log('empate')
    else if(corredor1.progress >= this._distance) console.log('gana corredor: ' + corredor1.id)
    else console.log('gana corredor: ' + corredor2.id)

  }
}

export default Race;
