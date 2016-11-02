import assert from 'assert';
import Vector from '../src/vector';

describe('Vector', () => {

  describe('#constructor', () => {

    it('initializes vector from values', () => {
      let v = new Vector(2, 3);
      assert.equal(v.x, 2);
      assert.equal(v.y, 3);
    });

    it('initializes vector from array', () => {
      let v = new Vector([2, 3]);
      assert.equal(v.x, 2);
      assert.equal(v.y, 3);
    })

  });

  let v = new Vector(2, 3);

  describe('#add', () => {

    it('adds a vector', () => {
      let newV = v.add(new Vector(21, 20));
      assert.equal(newV.x, 23);
      assert.equal(newV.y, 23);
    });

    it('adds a single number', () => {
      let newV = v.add(5);
      assert.equal(newV.x, 7);
      assert.equal(newV.y, 8);
    });

    it('adds two numbers', () => {
      let newV = v.add(2, 3);
      assert.equal(newV.x, 4);
      assert.equal(newV.y, 6);
    });

  });

  describe('#sub', () => {

    it('subtracts a vector', () => {
      let newV = v.sub(new Vector(3, 2));
      assert.equal(newV.x, -1);
      assert.equal(newV.y, 1);
    });

    it('subtracts a single number', () => {
      let newV = v.sub(23);
      assert.equal(newV.x, -21);
      assert.equal(newV.y, -20);
    });

    it('subtracts two numbers', () => {
      let newV = v.sub(2, 3);
      assert.equal(newV.x, 0);
      assert.equal(newV.y, 0);
    });

  });

  describe('#mul', () => {

    it('multiplies a vector', () => {
      let newV = v.mul(new Vector(2, -4));
      assert.equal(newV.x, 4);
      assert.equal(newV.y, -12);
    });

    it('multiplies a single number', () => {
      let newV = v.mul(10);
      assert.equal(newV.x, 20);
      assert.equal(newV.y, 30);
    });

    it('multiplies two numbers', () => {
      let newV = v.mul(-3, 5);
      assert.equal(newV.x, -6);
      assert.equal(newV.y, 15);
    });

  });

  describe('#neg', () => {

    it('negates a vector', () => {
      let newV = v.neg();
      assert.equal(newV.x, -2);
      assert.equal(newV.y, -3);
    });

  });


  describe('#equals', () => {

    it('true for equals', () => {
      assert(v.equals(2, 3));
    });

    it('false for unequals', () => {
      assert(!v.equals(4, 2));
    });

  });

  describe('#mag', () => {

    it('gives the correct magnitude', () => {
      assert.equal(new Vector(3, 4).mag(), 5);
    });

  });

  describe('#Symbol.iterable', () => {

    it('spreads the Vector', () => {
      const vX = 23;
      const vY = 42;
      const [x, y] = new Vector(vX, vY);
      assert.equal(x, vX);
      assert.equal(y, vY);
    })

  });

  describe('#dist', () => {

    it('gives the correct distance between two vectors', () => {
      assert.equal(new Vector(1, 0).dist(new Vector(2, 0)), 1);
    });

  });

  describe('#clamp', () => {

    it('correctly clamps', () => {
      const v = new Vector(23, 42).clamp(30, 40);
      assert.equal(v.x, 30);
      assert.equal(v.y, 40);
    });

  });

});
