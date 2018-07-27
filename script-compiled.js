'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var array = [1, 2, 3];

var newArray = array.map(function (item) {
  return Math.pow(item, 2);
});

console.log(newArray);

var _ref = ['hola', 2, 'mundo'],
    a = _ref[0],
    b = _ref[2];


console.log(a + ' - ' + b);

var _hola$num = {
  hola: 'hola mundo :)',
  num: 2018
},
    hola = _hola$num.hola,
    num = _hola$num.num;


console.log(hola + ' -> n\xFAmero ' + num);

// Component react
var HelloWorld = function HelloWorld(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h4',
      null,
      'Hello world! :)'
    ),
    React.createElement(
      'p',
      null,
      props.name
    )
  );
};

var app = document.getElementById('app');

ReactDOM.render(React.createElement(HelloWorld, { name: 'John Serrano' }), app);

// Async/Await
var resolveAfter2Seconds = function resolveAfter2Seconds() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('resolved');
    }, 2000);
  });
};

// async function asyncCall() {
//   console.log('calling');
//   var result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: "resolved"
// }

var asyncCall = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('calling');
            _context.next = 3;
            return resolveAfter2Seconds();

          case 3:
            result = _context.sent;

            console.log(result);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function asyncCall() {
    return _ref2.apply(this, arguments);
  };
}();

asyncCall();
