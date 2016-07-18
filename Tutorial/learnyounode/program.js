// // JSON API
// var http = require('http');
// var map = require('through2-map');
// var url = require('url');
// var datejs = require('datejs');
//
// var server = http.createServer(function (request, response) {
//   var queryObj = url.parse(request.url, true);
//   var dateObj = Date.parse(queryObj.query.iso);
//   var dateFormatted = {
//     hour: parseInt(dateObj.toString('hh')),
//     minute: parseInt(dateObj.toString('mm')),
//     second: parseInt(dateObj.toString('ss')),
//   };
//   response.writeHead(200, { 'content-type': 'application/json' });
//   switch(queryObj.pathname) {
//     case '/api/parsetime':
//     response.write(JSON.stringify(dateFormatted));
//     break;
//     case '/api/unixtime':
//     response.write(JSON.stringify({unixtime: dateObj.getTime()}));
//     break;
//     default:
//     response.write(JSON.stringify('Invalid route'));
//     break;
//   }
//   response.end();
// });
// server.listen(Number(process.argv[2]));

// // HTTP Uppercaserer
// var http = require('http');
// var map = require('through2-map');
//
// var server = http.createServer(function (req, res) {
//   if (req.method != 'POST')
//     return res.end('send me a POST\n');
//
//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase();
//   })).pipe(res);
// });
// server.listen(Number(process.argv[2]));

// // HTTP Server
// var http = require('http');
// var datejs = require('datejs');
// var fs = require('fs');
// var port = parseInt(process.argv[2]);
// var file = process.argv[3];
//
// var server = http.createServer(function (request, response) {
//   response.writeHead(200, { 'content-type': 'text/plain' });
//   fs.createReadStream(file).pipe(response);
// });
// server.listen(port);


// //TCP time
// var net = require('net');
// var datejs = require('datejs');
// var port = parseInt(process.argv[2]);
// var server = net.createServer(function (socket) {
//   socket.end(Date.parse('now').toString('yyyy-MM-dd hh:mm'));
// });
// server.listen(port);

// Juggling Async
// var http = require('http');
// var bl = require('bl');
// var url = process.argv.slice(2,5);
// var response = {};
// var i;
//
// var asyncOrdered = function(url, order, callback) {
//   var handler = function (response) {
//      response.pipe(bl(function (err, data) {
//        if (err)
//          return callback(-1);
//        data = data.toString();
//        return callback(order, data);
//      }));
//    };
//   http.get(url, handler);
// };
//
// var callback = function(order, data) {
//   if (order === -1) {
//     throw 'error';
//   }
//   response[order] = data;
//   if (response['0'] && response['1'] && response['2']) {
//     for (var key in response) {
//       console.log(response[key]);
//     }
//   }
// };
//
// for (i = 0; i < 3; i++) {
//   var request = asyncOrdered(url[i], i, callback);
// }

// // HTTP Collect
// var http = require('http');
// var url = process.argv[2];
//
// request = http.get(url, function(response) {
//   var dataArray = [];
//   response.on('data', function(data) {
//     dataArray.push(data.toString());
//   });
//   response.on('error', function(err) {
//     console.log(err);
//   });
//   response.on('end', function() {
//     console.log(dataArray.join('').length);
//     console.log(dataArray.join(''));
//   });
// });

// HTTP Client
// var http = require('http');
// var url = process.argv[2];
//
// request = http.get(url, function(response) {
//   response.on('data', function(data) {
//     console.log(data.toString());
//   });
//   response.on('error', function(err) {
//     console.log(err);
//   });
// });

// Fileread
// var filterDir = require('./module.js');
//
// var search = process.argv.slice(2,process.argv.length);
//
// var file = filterDir(search[0], search[1], function(error, list) {
//   if (!error) {
//     var i = 0;
//     for (i = 0; i < list.length; i++) {
//       console.log(list[i]);
//     }
//   }
// });
