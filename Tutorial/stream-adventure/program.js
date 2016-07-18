var spawn = require('child_process').spawn;
var duplexer = require('duplexer2');
var stream = require('stream');

console.log(process.argv);
module.exports = function (cmd, args) {
    console.log(cmd);
};


// 10
// var trumpet = require('trumpet');
// var through = require('through2');
// var tr = trumpet();
//
// var loud = tr.select('.loud').createStream();
// loud.pipe(through(function (buf, _, next) {
//     this.push(buf.toString().toUpperCase());
//     next();
// })).pipe(loud);
//
// process.stdin.pipe(tr).pipe(process.stdout);

// 9
// var ws = require('websocket-stream');
// var stream = ws('ws://localhost:8099');
//
// stream.write('hello\n');

// 8
// var request = require('request');
// var r = request.post('http://localhost:8099/');
//
// process.stdin.pipe(r).pipe(process.stdout);

// 7
// var http = require('http');
// var fs = require('fs');
// var through = require('through2');
//
// function write (buf, _, next) {
//   this.push(buf.toString().toUpperCase());
//   next();
// }
// function end (done) { done(); }
//
// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' });
//   req.pipe(through(write, end)).pipe(res);
// });
// server.listen(process.argv[2]);

// 6
// var concat = require('concat-stream');
//
// process.stdin.pipe(concat(function(body) {
//   console.log(body.toString().split('').reverse().join(''));
// }));

// 5
// var through = require('through2');
// var split = require('split');
// var stream = through(write);
//
// var isOdd = function(x) { return x & 1; };
// var count = 1;
//
// function write(buffer, encoding, next) {
//   if (isOdd(count)) {
//     this.push(buffer.toString().toLowerCase() + '\n' );
//   }
//   else {
//     this.push(buffer.toString().toUpperCase() + '\n');
//   }
//   count++;
//   next();
// }
//
// process.stdin
//   .pipe(split())
//   .pipe(stream)
//   .pipe(process.stdout);

// 4
// var through = require('through2');
// var stream = through(write, end);
//
// function write(buffer, encoding, next) {
//   this.push(buffer.toString().toUpperCase());
//   next();
// }
//
// function end() {
//   this.push(null);
// }
//
// process.stdin.pipe(stream).pipe(process.stdout);

// // 3
// process.stdin.pipe(process.stdout);

// 2
// fs = require('fs');
//
// fs.createReadStream(process.argv[2])
// .pipe(process.stdout);

// 1
// console.log('beep boop');
