class Animal {
  constructor (identifier) {
    this._progress = 0;
    this._id = identifier;
  }

  get id () {
    return this._id;
  }

  get progress () {
    return this._progress;
  }

  restart = () => {
    this._progress = 0;
  }
}
 export default Animal;
