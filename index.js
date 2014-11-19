
var callsite = require('callsite');
var debug = require('debug')('showexpr');
var fs = require('fs');

var cache = {};

var exports = module.exports = function showexpr() {

  var stack = callsite();
  var call = stack[2];
  if (!call) return done(Error("No callsite found"));
  var file = call.getFileName();
  var lineno = call.getLineNumber();

  var cached = cache[file+lineno];
  if (cached) return cached;

  var src = fs.readFileSync(file, 'utf8');

  var line = src.split('\n')[lineno - 1];
  src = line.match(/\(([^\),]*)[\),]/)[1];

  cache[file+lineno] = src;
  return src;
};
