'use strict'

const seneca = require('seneca')()
const brreg = require('./index')

seneca.use(brreg)

seneca.act('role: brreg, cmd: lookup', {query: '994528130'}, (error, data) => {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
