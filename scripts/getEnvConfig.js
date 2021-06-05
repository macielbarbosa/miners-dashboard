module.exports.getEnvConfig = () => {
  const { argv } = process
  const declaraConfigIndex = argv.findIndex(arg => arg === 'config')
  if (declaraConfigIndex > -1) {
    return argv[declaraConfigIndex + 1]
  } else {
    return 'multiprova'
  }
}
