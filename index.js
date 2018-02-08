module.exports = cb =>
  ([
    res => process.nextTick(cb.bind(null, undefined, res)),
    err => process.nextTick(cb.bind(null, err))
  ])
