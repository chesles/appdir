var fs = require('fs')
  , path = require('path')

if (require.main === module) {
  var link = path.resolve(__dirname, '../app')
    , dest = path.resolve(__dirname, '../../app')

  console.warn('creating appdir link: "%s" -> "%s"', link, dest)
  fs.symlink(dest, link, 'dir', function(err) {
    if (err) {
      console.warn('Warning: "app" symlink creation failed', err.message)
    }
  })
}
else {
  module.exports = console.warn("Don't require('appdir') directly");
}
