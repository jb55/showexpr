
var assert = require('assert');
var expect = require('expect.js');
var showexpr = require('./');
var debug = require('debug')('showexpr');

function fixture() {
  return showexpr();
}

fixture.prototype.member = function(){
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

  it('works with proto fn', function(){
    var expr = (new fixture()).member(1 + 2);
    expect(expr).to.be("1 + 2");
  });

  it('works with simple proto fn', function(){
    var newfix = new fixture();
    var expr = newfix.member(1 + 2);
    expect(expr).to.be("1 + 2");
  });

});
