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
        let out = []
        if (data.enhetsregisteret.data.entries.length > 0) {
          out = out.concat(data.enhetsregisteret.data.entries)
        }
        if (data.underenheter.data.entries.length > 0) {
          out = out.concat(data.underenheter.data.entries)
        }
        done(null, out)
      })
      .catch(error => {
        done(error, null)
      })
  })

  return options.tag || 'seneca-brreg'
}
