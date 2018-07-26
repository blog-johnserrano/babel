'use strict';

var array = [1, 2, 3];

var newArray = array.map(function (item) {
  return item ** 2;
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
