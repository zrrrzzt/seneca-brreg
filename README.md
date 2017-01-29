[![Build Status](https://travis-ci.org/zrrrzzt/seneca-brreg.svg?branch=master)](https://travis-ci.org/zrrrzzt/seneca-brreg)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/seneca-brreg/badge.svg?branch=master&service=github)](https://coveralls.io/github/zrrrzzt/seneca-brreg?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# seneca-brreg

Look up data from the Norwegian Entity Registry.

This is a module for the [Seneca](http://senecajs.org) microservices toolkit.

## Installation

```bash
$ npm i seneca
$ npm i seneca-brreg
```

## Usage

```JavaScript
'use strict'

const seneca = require('seneca')()
const brreg = require('seneca-brreg')

seneca.use(brreg)

seneca.act('role: brreg, cmd: lookup', {query: '994528130'}, (error, data) => {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
```

## License

[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/seneca-brreg.png "Robohash image of seneca-brreg")