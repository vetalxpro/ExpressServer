'use strict';

// var a = 5;
// window.b=6;
// console.log(window.b);

// console.log(window.c);
// console.log(window.f);
// function f(){
// 	let i=0;
// }
// var c = 'c';
// console.log(window.c);
// console.log('a' in window);
// if('a' in window){
// 	a = 1;
// }
// var a;
// console.log(a);

// function SayHiBye(firstName,lastName){
// 	console.log('Hi ' + getFullName());
// 	console.log('Bye '+getFullName());

// 	function getFullName(){
// 		return firstName+' '+lastName;
// 	}
// }
// SayHiBye('name','lastname');

// function makeCounter(){
// 	var currentCount = 1;

// 	return function(){
// 		return currentCount++;
// 	}
// }

// var counter1=makeCounter();
// var counter2=makeCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// console.log(counter2());
// console.log(counter2());

// function makeCounter(){

// 	function counter(){
// 		return counter.currentCount++;
// 	};

// 	counter.currentCount=1;
// 	return counter;
// }
// var counter1 = makeCounter();
// var counter2 = makeCounter();
// counter1.currentCount = 5;
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());



// var phrase = 'Hi';

// function say(name){
// 	console.log(name+', '+phrase);
// }
// say('Vasya');

// var value=0;

// function f(){
// 	if(1){
// 		value=true;
// 	}else{
// 		var value=false;
// 	}
// 	console.log(value);
// }
// f();
// console.log(value);

// function test(){
// 	console.log(window);
// 	var window =5;
// 	console.log(window);
// }
// test();

// var a=5;
// (function(){
// 	console.log(a);
// })();

// function makeCounter(){
// 	var currentCount=1;

// 	return function(){
// 		var currentCount=2;
// 		return currentCount;
// 	}
// }
// var test=makeCounter();
// console.log(test());
// var counter =1;
// function makeCounter() {
//   counter.counter = 1;

//   function counter() {

//     return counter.counter++;
//   }
//   return counter;
// }
// var counter1 = makeCounter();
// var counter2 = makeCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());

// var a = 1;

// function getFunc() {
//   var a = 2;
//   var func = new Function('', 'console.log(a)');
//   // var func = function(){
//   // 	return console.log(a);
//   // }
//   return func;
// }
// getFunc()();


// var sum = new Function('a,b', 'return a+b;');
// var a = 5,
//   b = 10;
// console.log(sum(a, b));


// function makeCounter() {
//   var currentCount = 1;

//   return {
//     getNext: function() {
//       return currentCount++;
//     },
//     set: function(value) {
//       currentCount = value;
//     },
//     reset: function() {
//       currentCount = 1;
//     }
//   };
// }

// var counter1 = makeCounter();
// console.log(counter1.getNext());
// counter1.set(15);
// console.log(counter1.getNext());
// console.log(counter1.getNext());
// counter1.reset();
// console.log(counter1.getNext());

// function makeCounter(){
// 	var currentCount=1;

// 	function counter(){
// 		return currentCount++;
// 	}

// 	counter.set=function(value){
// 		currentCount=value;
// 	}

// 	counter.reset=function(){
// 		currentCount=1;
// 	}

// 	return counter;
// }
// var counter1=makeCounter();
// counter1.set(15);
// console.log(counter1());

// function sum(a) {
//   return function(b) {
//     return a + b;
//   }
// }
// console.log(sum(5)(-1));

// function makeBuffer() {
//   var buf = '';

//   function buffer(str) {
//     if (arguments.length == 0) return buf;
//     buf += str;
//   }

//   buffer.clear=function(){
//   	buf='';
//   }

// 	return buffer;
// }
// var buffer = makeBuffer();

// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно! ');
// // buffer.clear();
// console.log(buffer());

// var users = [{
//   name: "Вася",
//   surname: 'Иванов',
//   age: 20
// }, {
//   name: "Петя",
//   surname: 'Чапаев',
//   age: 25
// }, {
//   name: "Маша",
//   surname: 'Медведева',
//   age: 18
// }];

// function byField(field) {
//   return function(a, b) {
//     if (a[field] > b[field]) return 1;
//     return -1;
//   }
// }

// users.sort(byField('name'));
// users.forEach(function(user) {
//   return console.log(user.name);
// });

// users.sort(byField('age'));
// users.forEach(function(user) {
//   return console.log(user.name + ' ' + user.age);
// });

// var arr = [1, 2, 3, 4, 5, 6, 7];

// function filter(arr, func) {
//   var result = [];
//   arr.forEach(function(item) {
//     if (func(item))
//       result.push(item);
//   });
//   return result;
// }

// function inBetween(min, max) {
//   return function(i) {
//     return (i >= min && i <= max);
//   }
// }

// function inArray(arr) {
//   return function(i) {
//     return arr.indexOf(i) != -1;

//   }
// }

// console.log(filter(arr, function(a) {
//   return a % 2 == 0;
// }));

// console.log(filter(arr, inBetween(3, 6)));

// console.log(filter(arr, inArray([1, 2, 10, 3, 9, 5])));


// function makeArmy(){
// 	var shooters = [];

// 	// for (var i=0;i<10;i++){
// 	// // 	var shooter = function me(){
// 	// // 		console.log(me.i);
// 	// // 	};
// 	// // 	shooter.i=i;
// 	// 	var shooter = (function(i){
// 	// 		return function(){
// 	// 			console.log(i);
// 	// 		}
// 	// 	})(i);
// 	// 	shooters.push(shooter);
// 	// }
// 	for(let i=0;i<10;i++){
// 		(function(i){
// 			var shooter=function(){
// 				console.log(i);
// 			};
// 			shooters.push(shooter);
// 		})(i);
// 	}

// 	return shooters;


// }

// var army = makeArmy();

// army[5]();

// var myFunction = (function() {
//   var message = 'Hi from module';

//   // function helpFunc() {
//   // }


//   // helpFunc.superFunc = function superFunc() {
//   //   console.log('super');
//   // };
//   // helpFunc.super2=function(){
//   // 	console.log('super2');
//   // }

//   // return helpFunc;
//   return {
//   	superFunc : function (i) {
//     	console.log(i||'super1');
//   		},
//   	super2:function(){
//   		console.log('super2');
//   		},
//   	hi:function(){
//   		console.log(message);
//   	}
//   }

// })();
// myFunction.hi();
// myFunction.superFunc('test');
// myFunction.super2();
// var arr=[];
// Object.keys(myFunction).forEach(function(item){
// 	arr.push(myFunction[item]);
// });
// console.log(arr);
// arr[0]('megatest');

// function f(){

// 	return function(){
// 		var useless = 'oops';
// 		var n = Math.random()*10;
// 		return Math.round(n);
// 	}
// }
// var rand = f();

// console.log([rand(),rand(),rand()]);
// // rand = null;

// function f(){
// 	console.log(1);
// }
// var obj={
// 	f:function(){
// 		console.log(2);
// 	}
// };

// with(obj){
// 	f();
// }

// var a =1;
// var obj={
// 	b:2
// };
// with(obj){
// 	var b;
// 	console.log(a+b);
// }


