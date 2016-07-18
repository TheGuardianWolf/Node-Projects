// module.exports = Function.call.bind(Array.prototype.slice);

// function curryN(fn, n) {
//   if (!n) {
//     n = fn.length;
//   }
//   var curry = function() {
//     var args = Array.prototype.slice.apply(arguments);
//     if (args.length === n) {
//       return fn.apply(fn, args);
//     }
//     return function() {
//       return curry.apply(curry, args.concat(Array.prototype.slice.apply(arguments)));
//     };
//   };
//   return curry;
// }
// module.exports = curryN;


// function getDependencies(tree) {
//   var dependencies = [];
//   if (tree) {
//     if (tree.dependencies) {
//       Object.keys(tree.dependencies).map(function(key) {
//           var version = tree.dependencies[key].version;
//           dependencies.push(key + '@' + version);
//           if (tree.dependencies[key].dependencies) {
//             getDependencies(tree.dependencies[key]).map(function(dep) {
//               if (dependencies.indexOf(dep) === -1) {
//                 dependencies.push(dep);
//               }
//             });
//           }
//       });
//     }
//   }
//   return dependencies.sort();
// }
//
// module.exports = getDependencies;

// function loadUsers(userIds, load, done) {
//   var users = [];
//   userIDs.map(function(id, index, array){
//     load(id, function(user) {
//       if (user) {
//         users.push(user);
//       }
//       if (index === array.length-1) {
//         done(users);
//       }
//     });
//   });
// }
//
// module.exports = loadUsers;

// function repeat(operation, num) {
//   // Modify this so it doesn't cause a stack overflow!
//   if (num <= 0) return;
//   operation();
//   return repeat.bind(null, operation, --num);
// }
//
// function trampoline(f) {
//     while (f && f instanceof Function) {
//         f = f.apply(f.context, f.args);
//     }
//     return f;
// }
//
// module.exports = function(operation, num) {
//   // You probably want to call your trampoline here!
//   return trampoline(repeat.bind(null,operation, num));
// };

// function repeat(operation, num) {
//   if (num <= 0) return;
//   operation();
//   // release control every 10 or so
//   // iterations.
//   // 10 is arbitrary.
//   if (num % 10 === 0) {
//     setTimeout(function() {
//       repeat(operation, --num);
//     });
//   } else {
//     repeat(operation, --num);
//   }
// }
// module.exports = repeat;

// function Spy(target, method) {
//   var originalFunction = target[method];
//
//   // use an object so we can pass by reference, not value
//   // i.e. we can return result, but update count from this scope
//   var result = {
//     count: 0
//   };
//
//   // replace method with spy method
//   target[method] = function() {
//     result.count++; // track function was called
//     return originalFunction.apply(this, arguments); // invoke original function
//   };
//
//   return result;
// }
//
// module.exports = Spy;

// module.exports = function arrayMap(arr, fn) {
//   return arr.reduce(function(prev, current) {
//     prev.push(fn(current));
//     return prev;
//   }, []);
// };

// module.exports = function(namespace) {
//   return console.log.bind(console, namespace);
// };

// var slice = Array.prototype.slice;
//
// function logger(namespace) {
//   return function output() {
//     var pre = namespace;
//     var args = slice.apply(arguments).join(' ');
//     console.log(namespace + ' ' + args);
//   };
// }
//
// module.exports = logger;

// function duckCount() {
//   var args = arguments;
//   return Object.keys(args).map(function (key) {
//     return args[key];
//   }).filter(function(arg) {
//     return Object.prototype.hasOwnProperty.call(arg, 'quack') === true;
//   }).length;
// }
//
// module.exports = duckCount;

// function reduce(arr, fn, initial) {
//   if (typeof initial[1] === 'undefined') {
//     initial = [initial, 0];
//   }
//   var index = initial[1];
//
//   var currentValue = fn(initial[0], arr[index], index, arr);
//   if (index === arr.length-1) {
//     return currentValue;
//   }
//   initial[1]++;
//   return reduce(arr, fn, initial);
// }
//
// module.exports = reduce;

// function countWords(arr) {
//   return arr.reduce(function(countMap, word) {
//     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//     return countMap
//   }, {}) // second argument to reduce initialises countMap to {}
// }
//
// module.exports = countWords

// function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//     return submittedUsers.every(function(user){
//       return goodUsers.some(function(goodUser) {
//         return goodUser.id === user.id;
//       });
//     });
//   };
// }
//
// module.exports = checkUsersValid;

// function getShortMessages(messages) {
//   return messages
//   .filter(function(msg){
//     return msg.message.test(/^.{0,49}$/);
//   })
//   .map(function(msg){
//     return msg.message;
//   });
// }
//
// module.exports = getShortMessages;

// function doubleAll(numbers) {
//   console.log(numbers);
//   numbers = numbers.map(function(val) {
//     val = val*2;
//     return val;
//   });
//   console.log(numbers);
//   return numbers;
// }
//
// module.exports = doubleAll;

// function repeat(operation, num) {
//   if (num > 0)
//     return repeat(operation, num-1);
// }
//
// // Do not remove the line below
// module.exports = repeat;

// function upperCaser(input) {
//   return input.toUpperCase();
// }
//
// module.exports = upperCaser;
