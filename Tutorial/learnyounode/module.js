module.exports = function(dir, ext, callback) {
  var fs = require('fs');
  var file = fs.readdir(dir, function(error, list) {
    if (!error) {
      var i = 0, ret = [];
      for (i = 0; i < list.length; i++) {
        if (list[i].search('.' + ext) >= 0) {
          ret.push(list[i]);
        }
      }
      return callback(null, ret);
    }
    return callback(true);
  });
};
