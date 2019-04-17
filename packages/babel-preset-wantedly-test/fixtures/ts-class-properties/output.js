"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Foo {
  constructor() {
    _defineProperty(this, "x", "bar");

    _defineProperty(this, "y", void 0);
  }

}

_defineProperty(Foo, "a", "foo");

_defineProperty(Foo, "b", void 0);