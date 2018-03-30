const nova = require('nova-colors')
const fs = require('fs')
const util = require('util')
const generate = require('./generator')

const fs2 = {
  exist: util.promisify(fs.exists),
  mkdir: util.promisify(fs.mkdir),
  write: util.promisify(fs.writeFile),
}

const mkdir = (dirname) =>
  fs2.exist(dirname)
  .then(e => e ? Promise.resolve() : fs2.mkdir(dirname))

const write = (filename, contents, callback) => {
  callback = callback || (function (err) {
    if(err) throw err
    else console.log('Success to write `' + filename + '`')
  })

  fs2.write(filename, contents).then(callback)
}

mkdir('dist')
.then(_ => Promise.all([
  write('dist/nova.mintty', generate({
    ...nova.default.grays,
    ...nova.ansiGroups.normal
  })),
  write('dist/nova-bright.mintty', generate({
    ...nova.default.grays,
    ...nova.ansiGroups.bright,
  }))
]))
.then(_ => console.log('Done!'))
.catch(err => console.error('Something goes wrong: ' + err))

