const cbfy = require('../')
test('Works with a solved promise', (done) => {

  const next = (err, res) => {
      expect(err).toBe(undefined)
      expect(res).toBe('foo')
      done()
  }

  Promise.resolve('foo')
    .then(...cbfy(next))
})

test('Works with rejected promise', (done) => {

  const next = (err, res) => {
      expect(err).toBe('bar')
      expect(res).toBe(undefined)
      done()
  }

  Promise.reject('bar')
    .then(...cbfy(next))
})

test('Resolution is asynchrounous', (done) => {

  let nextCalled = false
  let chainedPromiseCalled = false

  const next = (err, res) => {
      nextCalled = true
      expect(chainedPromiseCalled).toBe(true)
      done()
  }

  Promise.reject('bar')
    .then(...cbfy(next))
    .then(() => {
      chainedPromiseCalled = true
      expect(nextCalled).toBe(false)
    })
})
