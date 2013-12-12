// Generated by CoffeeScript 1.6.3
(function() {
  exports.init = function(db, words, done) {
    var batch, key, word, _i, _len;
    batch = db.batch();
    for (_i = 0, _len = words.length; _i < _len; _i++) {
      word = words[_i];
      key = word.length + '!' + word;
      batch.put(key, word);
    }
    return batch.write(done);
  };

  exports.query = function(db, word, done) {
    var matched, range;
    matched = [];
    range = {
      start: word.length + '!' + word.replace(/\*/g, ''),
      end: word.length + '!' + word.replace(/\*/g, '~')
    };
    return db.createReadStream(range).on('data', function(d) {
      return matched.push(d.value);
    }).on('error', function(e) {
      return done(e);
    }).on('end', function() {
      return done(null, matched);
    });
  };

}).call(this);