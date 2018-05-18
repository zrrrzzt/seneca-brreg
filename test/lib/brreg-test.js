'use strict'

const tap = require('tap')
const seneca = require('seneca')({log: 'silent'})
const brreg = require('../../index')

var counter = 0
const total = 3

const finished = () => {
  counter++
  if (counter === total) {
    tap.end()
    process.exit(0)
  }
}

seneca.use(brreg)

tap.test('It returns error on empty', (childTest) => {
  const payload = {}

  seneca.act('role: brreg, cmd: lookup', payload, (error, data) => {
    tap.ok(error, 'Error OK')
    childTest.done()
    finished()
  })
})

tap.test('It returns data on input', (childTest) => {
  const payload = {
    query: '994528130'
  }

  seneca.act('role: brreg, cmd: lookup', payload, (error, data) => {
    if (error) {
      throw error
    }

    tap.equal(data[0].orgnr, '994528130', 'Expected data returned from json')

    childTest.done()
    finished()
  })
})
