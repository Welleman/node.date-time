# node.date-time

[![npm](https://img.shields.io/npm/v/node.date-time.svg?style=flat-square)](https://www.npmjs.com/package/node.date-time)

date-time formatter for javascript

## Installation
```
$ npm install node.date-time
```

## Use with CMD
```js
const format = require("node.date-time");
console.log(new Date().format("Y-M-d")); // 2016-5-18
console.log(format("y-M-d H:m:s")); // 16-5-18 15:45:8
```

## Use with html
```js
<script src="./node_modules/node.date-time/index.js"></script>
<script>
console.log(format("Y-MM-dd HH:mm:ss", new Date())); // 2016-05-03 01:01:01
console.log(format("Y-MM-dd HH:mm:ss", "2016-5-5 1:1:1"); // 2016-05-03 01:01:01
console.log(format("Y-MM-dd HH:mm:ss", "20160505010101"); // 2016-05-03 01:01:01
</script>
```

## Format

- `yyyy`,`Y`
    - A full numeric representation of a year
    - eg: 2016,1998
- `yy`,`y`
    - A two digit representation of a year
    - 16,98
- `MM`
    - A two digit representation of a month
    - 01-12
- `M`
    - A month
    - 1-12
- `dd`
    - A two digit representation of a date
    - 01-31
- `d`
    - A date
    - 1-31
- `D`
    - A day in a week
    - 0-6
- `HH`,`hh`
    - A two digit representation of a hout
    - 00-23
- `H`,`h`
    - An hour
    - 0-23
- `mm`
    - A two digit representation of a minute
    - 00-59
- `m`
    - A minute
    - 0-59
- `ss`
    - A two digit representation of a second
    - 00-59
- `s`
    - A second
    - 0-59
- `ms`
    - A microsecond
    - 000-999