import 'babel-polyfill';

let sqr = n => Math.pow(n, 2);

let valsOf = (args) => {
  let nx = args[0];
  if (args.length > 1 || nx instanceof Vector) {
    let v = new Vector(...args);
    return [v.x, v.y];
  }
  return [nx, nx];
};

class Vector {

  static zero() {
    return new Vector(0, 0);
  }

  constructor(o, y) {
    let x;
    if (Array.isArray(o)) {
      [x, y] = o;
    } else if (o instanceof Object) {
      x = o.x;
      y = o.y;
    } else x = o;
    this.x = x;
    this.y = y;
    Object.freeze(this);
  }

  [Symbol.iterator]() {
    return this.toArray()[Symbol.iterator]();
  }

  add(...args) {
    let [nx, ny] = valsOf(args);
    return new Vector(this.x + nx, this.y + ny);
  }

  sub(...args) {
    let [nx, ny] = valsOf(args);
    return new Vector(this.x - nx, this.y - ny);
  }

  mul(...args) {
    let [nx, ny] = valsOf(args);
    return new Vector(this.x * nx, this.y * ny);
  }

  neg() {
    return this.mul(-1);
  }

  dot(...args) {
    let v = new Vector(args);
    return this.x * v.x + this.y + v.y;
  }

  angle(...args) {
    let v = new Vector(args);
    return Math.acos(this.norm().dot(v));
  }

  equals(...args) {
    let v = new Vector(args);
    return this.x == v.x && this.y == v.y;
  }

  magSq() {
    return sqr(this.x) + sqr(this.y);
  }

  mag() {
    return Math.sqrt(this.magSq());
  }

  dist(...args) {
    let v = new Vector(args);
    return this.sub(v).mag();
  }

  norm() {
    return this.mul(1 / this.mag());
  }

  max(n) {
    return this.mag() <= n ? this : this.norm().mul(n);
  }

  toString() {
    return `(${this.x}/${this.y})`
  }

  toArray() {
    return [this.x, this.y];
  }

}

export default Vector;
