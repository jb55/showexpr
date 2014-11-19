
var assert = require('assert');
var showexpr = require('./');
var debug = require('debug')('showexpr');

describe('showexpr', function(){
  it('works for argument', function(){
    function go(hi, hi2) {
      var data = showexpr();
      assert(data === "1 == 3", "'" + data + " != '1 == 2'");
    }

    go(1 == 3, 1 == 2);
  });

  it('works with stuff in argument', function(){
    function go(hi, hi2) {
      var data = showexpr();
      assert(data === "1 == 3", "'" + data + " != '1 == 2'");
    }

    go(1 == 3, function(){
    });
  });

});
