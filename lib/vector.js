'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var sqr = function sqr(n) {
  return Math.pow(n, 2);
};

var valsOf = function valsOf(args) {
  var nx = args[0];
  if (args.length > 1 || nx instanceof Vector) {
    var v = new (Function.prototype.bind.apply(Vector, [null].concat(_toConsumableArray(args))))();
    return [v.x, v.y];
  }
  return [nx, nx];
};

var Vector = function () {
  _createClass(Vector, null, [{
    key: 'zero',
    value: function zero() {
      return new Vector(0, 0);
    }
  }]);

  function Vector(o, y) {
    _classCallCheck(this, Vector);

    var x = void 0;
    if (Array.isArray(o)) {
      var _o = _slicedToArray(o, 2);

      x = _o[0];
      y = _o[1];
    } else if (o instanceof Object) {
      x = o.x;
      y = o.y;
    } else x = o;
    this.x = x;
    this.y = y;
    Object.freeze(this);
  }

  _createClass(Vector, [{
    key: Symbol.iterator,
    value: function value() {
      return this.toArray()[Symbol.iterator]();
    }
  }, {
    key: 'add',
    value: function add() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _valsOf = valsOf(args);

      var _valsOf2 = _slicedToArray(_valsOf, 2);

      var nx = _valsOf2[0];
      var ny = _valsOf2[1];

      return new Vector(this.x + nx, this.y + ny);
    }
  }, {
    key: 'sub',
    value: function sub() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var _valsOf3 = valsOf(args);

      var _valsOf4 = _slicedToArray(_valsOf3, 2);

      var nx = _valsOf4[0];
      var ny = _valsOf4[1];

      return new Vector(this.x - nx, this.y - ny);
    }
  }, {
    key: 'mul',
    value: function mul() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var _valsOf5 = valsOf(args);

      var _valsOf6 = _slicedToArray(_valsOf5, 2);

      var nx = _valsOf6[0];
      var ny = _valsOf6[1];

      return new Vector(this.x * nx, this.y * ny);
    }
  }, {
    key: 'neg',
    value: function neg() {
      return this.mul(-1);
    }
  }, {
    key: 'dot',
    value: function dot() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var v = new Vector(args);
      return this.x * v.x + this.y + v.y;
    }
  }, {
    key: 'angle',
    value: function angle() {
      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      var v = new Vector(args);
      return Math.acos(this.norm().dot(v));
    }
  }, {
    key: 'equals',
    value: function equals() {
      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      var v = new Vector(args);
      return this.x == v.x && this.y == v.y;
    }
  }, {
    key: 'magSq',
    value: function magSq() {
      return sqr(this.x) + sqr(this.y);
    }
  }, {
    key: 'mag',
    value: function mag() {
      return Math.sqrt(this.magSq());
    }
  }, {
    key: 'dist',
    value: function dist() {
      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      var v = new Vector(args);
      return this.sub(v).mag();
    }
  }, {
    key: 'norm',
    value: function norm() {
      return this.mul(1 / this.mag());
    }
  }, {
    key: 'max',
    value: function max(n) {
      return this.mag() <= n ? this : this.norm().mul(n);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '(' + this.x + '/' + this.y + ')';
    }
  }, {
    key: 'toArray',
    value: function toArray() {
      return [this.x, this.y];
    }
  }]);

  return Vector;
}();

exports.default = Vector;
module.exports = exports['default'];