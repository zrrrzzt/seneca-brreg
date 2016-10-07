'use strict'

module.exports = function brreg (options) {
  const brreg = require('brreg')
  const seneca = this

  seneca.add('role:brreg, cmd:lookup', (args, done) => {
    const brregOptions = {
      query: args.query
    }

    brreg(brregOptions, (error, data) => {
      if (error) {
        done(error, null)
      } else {
        done(null, data)
      }
    })
  })

  return options.tag || 'seneca-brreg'
}
