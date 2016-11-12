'use strict'

module.exports = function brreg (options) {
  const brreg = require('brreg')
  const seneca = this

  seneca.add('role:brreg, cmd:lookup', (args, done) => {
    const brregOptions = {
      query: args.query
    }

    brreg(brregOptions)
      .then(data => {
        done(null, data)
      })
      .catch(error => {
        done(error, null)
      })
  })

  return options.tag || 'seneca-brreg'
}
