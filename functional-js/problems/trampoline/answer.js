// Generated by CoffeeScript 1.6.3
/*

A trampoline is used to continously call `repeat` in a synchonous manner.

The trampoline continues to synchronously execute steps, getting new
steps, until there are no more steps.
*/


(function() {
  var repeat, trampoline, _repeat;

  repeat = function(f, n) {
    if (n > 0) {
      return function() {
        f();
        return repeat(f, --n);
      };
    }
  };

  trampoline = function(f) {
    var _results;
    _results = [];
    while (typeof f === 'function') {
      _results.push(f = f());
    }
    return _results;
  };

  module.exports = _repeat = function(f, n) {
    var start;
    start = function() {
      return repeat(f, n);
    };
    return trampoline(start);
  };

  /*
  count = 0
  _repeat((-> ++count), 10000)
  console.log 'executed %d times.', count
  */


}).call(this);
