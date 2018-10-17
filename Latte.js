class Latte {
  constructor(milk, base) {
    this.milk = milk;
    this.base = base;
    this.flavors = [];
  }

addFlavor(flavor) {
  this.flavors.push(flavor)
}

}

module.exports = Latte;
