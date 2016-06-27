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
function makeCounter(){
	counter.counter = 1;
	function counter(){

		return counter.counter++;
	}
	return counter;
}
var counter1=makeCounter();
var counter2=makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter2());


