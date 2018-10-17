const expect = require('chai').expect;
const Latte = require('../Latte.js');

// let dirtyChai = new Latte("Whole milk", "Espresso");


describe("Latte Creation", function() {
let basicLatte;

  before(function(){
    basicLatte = new Latte("Whole milk", "Espresso");
  });

  describe("Should be able to create a new latte", function(){
    it("Should create a new instance of the Latte class", function(){
      expect(basicLatte).to.be.an.instanceof(Latte);
    });
  });

  describe("A latte should have a milk, base, and flavors.", function(){

    it("should have keys of milk, base, and flavors", function(){
      expect(basicLatte).to.have.all.keys("milk", "base", "flavors");
    });
    it("Should have 'Whole milk', 'Espresso', and flavors pointing to an empty array.", function(){
      expect(basicLatte).to.deep.equal({milk: 'Whole milk', base: 'Espresso', flavors: []});
    });

  });
  describe("Lattes should be able to have flavors", function(){
    beforeEach(function(){
      basicLatte.addFlavor("Chai")
    });
    it("Should be able to add a flavor to a latte.", function() {
      expect(basicLatte.flavors).to.include("Chai");
    });

  });
});
