// Generated by CoffeeScript 1.6.3
(function() {
  var through, write;

  through = require('through');

  write = function(buffer) {
    return this.queue(buffer.toString().toUpperCase());
  };

  process.stdin.pipe(through(write)).pipe(process.stdout);

}).call(this);