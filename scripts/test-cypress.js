const shell = require('shelljs')
const { checkExistAndRemove, matchAndRemove } = require('./utils')

let argv = JSON.parse(process.env.npm_config_argv).original
if (argv[0] === 'start') argv[0] = 'run'
else argv = argv.slice(1)

process.env.NODE_PATH = '.'
const runner = 'cypress'

let piccoUrl = {
  front: {
    dev: 'http://dev.picco.comperve.ufrn.br/',
    master: 'http://picco.comperve.ufrn.br/',
  },
  api: {
    dev: 'http://dev.api.picco.comperve.ufrn.br/api/',
    master: 'http://api.picco.comperve.ufrn.br/api/',
  },
}

let multiprovaUrl = {
  front: {
    dev: 'https://dev.multiprova.ufrn.br/',
    master: 'https://multiprova.ufrn.br/',
  },
  api: {
    dev: 'https://api.dev.multiprova.ufrn.br/api/',
    master: 'https://api.multiprova.ufrn.br/api/',
  },
}

let url = piccoUrl

const getPiccoConfig = (folder) => {
  if (folder) return `testFiles=**/${folder}/**/*.picco.cypress.js`
  else return `testFiles=**/*.picco.cypress.js`
}

const getMultiprovaConfig = (folder) => {
  if (folder) return `testFiles=**/${folder}/**/*.multiprova.cypress.js`
  else return `testFiles=**/*.multiprova.cypress.js`
}

process.env.NODE_ENV = 'picco'
process.env.BABEL_ENV = 'test'

const folderArg = matchAndRemove(argv, 'folder')
let folderToTest = folderArg ? folderArg.replace('folder=', '') : null

if (checkExistAndRemove(argv, 'picco')) {
  argv.push(`--config ${getPiccoConfig(folderToTest)}`)
  url = piccoUrl
}

if (checkExistAndRemove(argv, 'multiprova') || checkExistAndRemove(argv, 'multi') || checkExistAndRemove(argv, 'mp')) {
  argv.push(`--config ${getMultiprovaConfig(folderToTest)}`)
  url = multiprovaUrl
}

process.env.CYPRESS_BASE_URL = url.front.master
process.env.CYPRESS_API_URL = url.api.master

if (checkExistAndRemove(argv, 'local') || checkExistAndRemove(argv, 'loc') || checkExistAndRemove(argv, 'l')) {
  process.env.CYPRESS_BASE_URL = 'http://localhost:3020/'
  if (checkExistAndRemove(argv, 'api-local') || checkExistAndRemove(argv, 'api-l'))
    process.env.CYPRESS_API_URL = 'http://localhost:3010/api/'
  else if (checkExistAndRemove(argv, 'api-develop') || checkExistAndRemove(argv, 'api-d'))
    process.env.CYPRESS_API_URL = url.api.dev
  else if (checkExistAndRemove(argv, 'api-production') || checkExistAndRemove(argv, 'api-p'))
    process.env.CYPRESS_API_URL = url.api.master
  else process.env.CYPRESS_API_URL = 'http://localhost:3010/api/'
}

if (checkExistAndRemove(argv, 'develop') || checkExistAndRemove(argv, 'dev') || checkExistAndRemove(argv, 'd')) {
  process.env.CYPRESS_BASE_URL = url.front.dev
  process.env.CYPRESS_API_URL = url.api.dev
}

if (checkExistAndRemove(argv, 'production') || checkExistAndRemove(argv, 'prod')) {
  process.env.CYPRESS_BASE_URL = url.front.master
  process.env.CYPRESS_API_URL = url.api.master
}

const options = argv.join(' ')

console.log(`Url front: ${process.env.CYPRESS_BASE_URL}`)
console.log(`Url back para chamadas diretas à api: ${process.env.CYPRESS_API_URL}`)
console.log(`Comando: ${runner} ${options}`)

shell.exec(`${runner} ${options}`, function (code) {
  process.exit(code)
})
