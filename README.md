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


## Warning

You have to be carefull about thwn you want use it, or not.
Once you call cbfy, everything that happend in your cb will be runned asyncronously and escaped of the Parent promise.
You probably don't want chain anything after the `then(...cbfy(cb))` call.

For example, if even if you callback return a Promise you can`t chain it the same way as you would without cbfy.
This is by design.
