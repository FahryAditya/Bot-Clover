const chalkImport = require('chalk')
const chalk = chalkImport.default || chalkImport

function time() {
  return new Date().toLocaleTimeString('id-ID', { hour12: false })
}

module.exports = {
  logInfo(text) {
    console.log(
      chalk.blue(`[${time()}] INFO  : ${text}`)
    )
  },

  logError(text) {
    console.log(
      chalk.red(`[${time()}] ERROR : ${text}`)
    )
  },

  logCmd(cmd, from) {
    console.log(
      chalk.green(`[${time()}] CMD   : ${cmd} | from ${from}`)
    )
  }
}
