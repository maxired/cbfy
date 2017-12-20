# cbfy

## Installation

`npm install cbfy`


## Usage
Call a callback after a Promise return

```javascript
const cbfy = require('cbfy')

Promise.resolve().then(...cbfy(cb))

```

## Why ?

Promises are sometimes counter intuitive, specially when mixin Promises and callbacks.
Of course you want avoid that situation, but when migrating from legacy code, it's good to have a way.

This package is a little bit similar to `[nodify](https://www.npmjs.com/package/nodeify)`, or at least try to solve the  same problem.
it just does it with a diffent interface, using object spreading, in order to respect the `then(successCb, errorCb)` syntax
