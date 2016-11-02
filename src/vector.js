const sqr = n => Math.pow(n, 2);

const valsOf = (args) => {
  let nx = args[0];
  if (args.length > 1 || nx instanceof Vector) {
    let v = new Vector(...args);
    return [v.x, v.y];
  }
  return [nx, nx];
};

const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

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
    let [nx, ny] = valsOf(args);
    return this.x * nx + this.y + ny;
  }

  angle(...args) {
    let v = new Vector(args);
    return Math.acos(this.norm().dot(v));
  }

  equals(...args) {
    let [nx, ny] = valsOf(args);
    return this.x == nx && this.y == ny;
  }

  magSq() {
    return sqr(this.x) + sqr(this.y);
  }

  mag() {
    return Math.sqrt(this.magSq());
  }

  distSq(...args) {
    return this.sub(new Vector(valsOf(args))).magSq();
  }

  dist(...args) {
    return this.sub(new Vector(valsOf(args))).mag();
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

  clamp(min, max) {
    return new Vector(clamp(this.x, min, max), clamp(this.y, min, max));
  }

}

export default Vector;
