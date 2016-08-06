# Wacktor
## Brought to you by ES6 & [Babel](https://babeljs.io/)

Solves the main pain points I have with the other vector libraries:

- vectors are not being mutated => every method returns a new vector
- methods accept vectors, objects, arrays and single numbers

```javascript
var Vector = require('Wacktor');

var v1 = new Vector(2, 3);
var v2 = new Vector([4, 2]);
var v2 = new Vector({x: 13, y: 37);
```


## Methods

### Iterable

```javascript
var v1 = new Vector(2, 3);
console.log(...v1); // 2, 3
var [x, y] = v1;
console.log(x);     // 2
```

### add, sub, mul

The method signature is the same for each of these.

#### (Number n)
n will be applied to x & y

#### (Number nx, Number ny) OR ([Number nx, Number ny])
nx will be applied to x, ny to y

#### (Vector/Object v)
x of v will be applied to x, y of v to y


```javascript
v1.add(2);      // (4, 5)
v1.add(2, 0);   // (4, 3)

v1.mul([2, 5]); // (4, 15)
```

### magSq, mag
Returns the (squared) magnitude.

```javascript
new Vector(4, 3).mag(); // 5
```

### neg
```javascript
new Vector(12, 34).neg(); // (-12, -34)
```

### equals
Compares the vector with another vector, numbers, array or object.

### dist
Distance to another vector, numbers, array or object

### dot

### angle

### max
