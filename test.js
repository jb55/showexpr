
var assert = require('assert');
var expect = require('expect.js');
var showexpr = require('./');
var debug = require('debug')('showexpr');

function fixture() {
  return showexpr();
}

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

  it('works with string in arg', function(){
    var expr = fixture("has,comma");
    expect(expr).to.be("\"has,comma\"");
  });

  it('works with ) in arg', function(){
    var expr = fixture("has)parens");
    expect(expr).to.be("\"has)parens\"");
  });

});
