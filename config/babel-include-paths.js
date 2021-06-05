const path = require('path')

const paths = require('../.babel.include').map(modulo => path.resolve(`node_modules/${modulo}`))

module.exports = paths
