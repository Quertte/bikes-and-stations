class Station {
  constructor(name, location, bikes) {
    this.name = name;
    this.location = location;
    this.bikes = bikes;
  }

  newestBike() {
    return this.bikes.sort((el1, el2) => el2.modelYear - el1.modelYear)[0];
  }

  empty() {
    return this.bikes.length === 0;
  }

  release() {
    if (this.empty()) {
      return undefined;
    }
    return this.bikes.shift();
  }

  take(arg) {
    this.bikes.push(arg);
  }

  takeMultiple(arr) {
    arr.forEach(el => this.bikes.push(el));
  }
}

module.exports = Station;
