'use strict';
// Некоторые другие возможности
// Типы данных: [[Class]], instanceof и утки
// Формат JSON, метод toJSON
// setTimeout и setInterval
// Запуск кода из строки: eval
// Перехват ошибок, "try..catch"

// console.log(typeof 1);
// console.log(typeof 'text');
// console.log(typeof null);
// console.log(typeof undefined);

// console.log(typeof new Date);
// console.log(typeof []);
// console.log(typeof {});

// var checkObject = {}.toString;
// console.log(checkObject.call([]).slice(8,-1));

// function getClass(obj){
// 	console.log( {}.toString.call(obj).slice(8,-1));
// }
// getClass({});


// console.log(Array.isArray([1,2,3,4,5]));
// console.log(Array.isArray({1:2,3:4}));

// function User(){
// }
// var user = new  User();
// console.log(user instanceof User);

// var arr = [1,2,3,4,5];
// if(arr.splice){
// 	console.log('its array');
// }
// var date = new Date();
// if(date.getTime){
// 	console.log('its Date');
// }

// function sayHi(who){
// 	if(Array.isArray(who)){
// 		who.forEach(sayHi);
// 	}else{
// 		console.log('Hi '+who);
// 	}
// }

// sayHi(['Petya','Vasya',['Sasha','Masha']]);

// function formatDate(date) {

//   if (Array.isArray(date)) {
//     date[1] = date[1] + 1;
//   } else if (typeof(date) == 'number' && isFinite(date)) {
//     date = date * 1000;
//   }
//   date = new Date(date);
//   return date.toLocaleString("ru", {day: '2-digit', month: '2-digit', year: '2-digit'});
// }

// console.log(formatDate('2011-10-02'));
// console.log(formatDate(1234567890));
// console.log(formatDate([2014, 0, 1]));
// console.log(formatDate(new Date(2014, 0, 1)));


// ==================Формат JSON, метод toJSON

// var numbers = '[0,1,2,3,4]';
// numbers = JSON.parse(numbers);
// console.log(numbers);

// var user = '{"name":"Vasya"}';
// console.log(JSON.parse(user).name);

// var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';

// var event = JSON.parse(str,function(key,value){
// 	if(key=='date'){
// 		return new Date(value);
// 	}
// 	return value;
// });
// console.log(event.date.getDate());


// var event = {
// 	title:'Конференция',
// 	date:'Сегодня'
// };
// var str = JSON.stringify(event);
// console.log(str);


// var room = {
//   number: 23,
//   occupy: function() {
//     alert( this.number );
//   }
// };

// event = {
//   title: "Конференция",
//   date: new Date(Date.UTC(2014, 0, 1)),
//   room: room
// };

// console.log(JSON.stringify(event));


// var user = {
//   name: "Вася",
//   age: 25,
//   window: window
// };

// console.log(JSON.stringify(user,['name','age']));
// console.log(JSON.stringify(user,function(key,value){
// 	if(key=='window')return undefined;
// 	return value;
// },2));

// var leader = {
//   name: "Василий Иванович",
//   age: 35
// };
// leader = JSON.stringify(leader,'',2);
// console.log(leader);
// leader = JSON.parse(leader);
// console.log(leader);


// =================setTimeout и setInterval

// function hi(str){
// 	console.log(str);
// }
// setTimeout(hi,1000,'hi from argument');
// var timerId = setTimeout(function(){
// 	console.log('anonymous func with timeout');
// },2000);
// clearTimeout(timerId);
// console.log(timerId);

// var a=0;
// var timerId = setInterval(function(){
// 	console.log(a++);
// },1000);
// setTimeout(function(){
// 	clearInterval(timerId);
// },10000);

//recursive setTimeout
// var timerId = setTimeout(function tick(){
// 	console.log('tick '+ a++);
// 	timerId = setTimeout(tick,1000);
// },10);
// setTimeout(function(){
// 	clearTimeout(timerId);
// },10000);

// function printNumbersInterval() {
//   var i = 1;
//   var timerId = setInterval(function() {
//     console.log(i);
//     if (i == 20) clearInterval(timerId);
//     i++;
//   }, 100);


// }


// function printNumbersInterval() {
//   var i = 1;
//   setTimeout(function run() {
//     console.log(i++);
//     if (i <= 20) setTimeout(run, 100);
//   }, 100);
// }

// printNumbersInterval();


// setTimeout(function() {
//   console.log( i );
// }, 100);

// var i;

// function hardWork() {
//   	for (i = 0; i < 1e8; i++) hardWork[i % 2] = i;

// }
// hardWork();

// var timer = setInterval(function() {
//   i++;
// }, 10);

// setTimeout(function() {
//   clearInterval(timer);
//   console.log( i ); // (*)
// }, 50);

// var i;

// function f() {
//   // точное время выполнения не играет роли
//   // здесь оно заведомо больше 100 мс
//   for (i = 0; i < 1e8; i++) f[i % 2] = i;
// }

// f();


// function f(x, b) {
//   console.log(x + b);
// }

// function delay(func, timeout) {
//   return function() {
//     var savedThis = this;
//     var savedArgs = arguments;
//     setTimeout(function() {
//       func.apply(savedThis, savedArgs);
//     }, timeout);
//   }
// }
// var f1000 = delay(f, 1000);
// var f1500 = delay(f, 1500);
// f1000('test1', 2);
// f1500('test2');


// function f (x){
// 	console.log(x);
// }

// function debounce(f,delay){
// 		var state = true;
// 		// var COOLDOWN = 1;
// 		return function(){
// 			if(!state)return;
// 			f.apply(this,arguments);
// 			state = false;
// 			setTimeout(function(){
// 				state = true;
// 			},delay);
// 		}
// }

// var f = debounce(f,1000);
// f(1);
// f(2);
// setTimeout( function() { f(3) }, 100); // игнор (прошло только 100 мс)
// setTimeout( function() { f(4) }, 1100); // 4, выполнится
// setTimeout( function() { f(5) }, 1500); // игнор


// function f(x){
// 	console.log(x);
// }
// function throttle(func,delay){
// 	var isThrottled =false;
// 	var savedArgs;
// 	var savedThis;
// 	return function wrapper(){
// 		if(isThrottled){
// 			savedArgs= arguments;
// 			savedThis = this;
// 			return;
// 		}
// 		func.apply(this,arguments);

// 		isThrottled = true;
// 		setTimeout(function(){
// 			isThrottled = false;
// 			if(savedArgs){
// 				wrapper.apply(savedThis,savedArgs);
// 				savedArgs = savedThis = null;
// 			}
// 		},delay);
// 	}
// }

// var f1000=throttle(f,1000);
// f1000(1); // выведет 1
// f1000(2); // (тормозим, не прошло 1000 мс)
// f1000(3); // (тормозим, не прошло 1000 мс) а после выполнения f(1) выполняем

// ================Запуск кода из строки: eval


// var a =1;
// (function(){
// 	var a = 2;
// 	window.eval('console.log(a)');
// 	eval('var b =5 ; console.log(a+b)');
// 	console.log(eval('2+2'));
// })();



//console.log(b)  // is not defined
// window.execScript for IE8-
// function globalEval(code){
// 	window.execScript ? execScript(code) : window.eval(code);
// }
// var a =1;
// (function(){
// 	var a =2;
// 	globalEval('console.log(a)');
// })();

// ===============Внешние данные через new Function

// var a =2,
// 	b=3;

// var mul = new Function('a,b','return(a*b)');
// console.log(mul(a,b));

// ===================JSON и eval

// var str = '{ \
//     "name": "Вася", \
//     "age": 25 \
// }';

// var user = eval('(' + str + ')');

// console.log( user.name ); // Вася


// var calc =function(){
// 	var calcData = prompt('Введите математическое выражение','');
// 	console.log(calcData);
// 	console.log(eval(calcData));
// }
// calc();


// ==================Перехват ошибок, "try..catch"

// try{
// 	console.log('start try');
// 	throw new Error('er');
// 	console.log('end try');
// }catch(err){
// 	console.log(Object.getOwnPropertyNames(err));
// 	console.error(err.name + err.message +err.stack);
// }

// var data ='{"name":"Vasya"}';
// try{
// 	var user = JSON.parse(data);
// 	console.log(user);
// }catch(e){
// 	console.error('Неверные данные! '+e.stack);
// }

// var data = '{"name":"Vasya","age":25}';
// var data = '{"age":25}';
// try{
// 	var user = JSON.parse(data);
// 	if(!user.name) throw new SyntaxError('wrong property "name"');
// 	console.log(user.name);
// }catch(e){
// 	if(e.name == 'SyntaxError'){
// 		console.error(e.stack);
// 	}else{
// 		throw e;
// 	}
// }


// function readData() {
//   var data = '{ "name": "Вася", "age": 30 }';

//   try {
//     // ...
//     blabla(); // ошибка!
//   } catch (e) {
//     // ...
//     if (e.name != 'SyntaxError') {
//       throw e; // пробрасываем
//     }
//   }
// }

// try {
//   readData();
// } catch (e) {
//   alert( "Поймал во внешнем catch: " + e ); // ловим
// }


// function ReadError(message,cause){
// 	this.message= message;
// 	this.cause = cause;
// 	this.name = 'ReadError';
// 	this.stack = cause.stack;
// }

// function readData(){
// 	var data='{bla}';

// 	try{
// 		JSON.parse(data);
// 	}catch(e){
// 		if(e.name=='URIError'){
// 			throw new ReadError('Error in URI',e);
// 		}else if(e.name == 'SyntaxError'){
// 			throw new ReadError('Syntax Error in data',e);
// 		}else{
// 			throw e;
// 		}
// 	}
// }

// try{
// 	readData();
// }catch(e){
// 	if(e.name == 'ReadError'){
// 		console.log(e.message+'\n\r'+e.cause);
// 		console.log(e);
// 	}else{
// 		throw e;
// 	}
// }


// function sum(n) {
//   if (n) return n + sum(n - 1);
//   return 0;
// }

// var n = 20;
// var start = performance.now();
// try {
//   var result = sum(n);

// } catch (e) {
//   result = 0;
//   console.log(e);
// } finally {
//   var diff = performance.now() - start;
// }

// console.log(result ? result : 'Была ошибка');
// console.log('Выполнение заняло ' + diff + ' ms');


// function func() {

//   try {
//     // сразу вернуть значение
//     return 1;

//   } catch (e) {
//     /* ... */
//   } finally {
//     console.log( 'finally' );
//   }
// }

// console.log( func() ); // сначала finally, потом 1


// function func() {
//   try {
//     return 1;
//   } finally {
//     alert( 'Вызов завершён' );
//   }
// }

// alert( func() ); // сначала finally, потом 1

// window.onerror = function(message, url, lineNumber) {
//   alert("Поймана ошибка, выпавшая в глобальную область!\n" +
//     "Сообщение: " + message + "\n(" + url + ":" + lineNumber + ")");
// };

// function readData() {
//   error(); // ой, что-то не так
// }

// readData();


// ===========
function MathError(message) {
  this.name = 'MathError';
  this.message = message || 'default math error';
}

function evalCalc() {


  var str = prompt('Enter expression', '');
  if (str == null) {
    alert('Вы отменили ввод.');
  } else if (str.length == 0) {
    alert('Вы ничего не ввели. Повторите ввод.');
    evalCalc();
  } else if (str) {

    try {
      var result = eval(str);
      if (!isFinite(result) || isNaN(result)) throw new MathError('деление на 0');
      if (typeof(result)=='number')alert('Результат: ' + result);
      if (confirm('Повторить?')) evalCalc();

    } catch (e) {

      if (e.name == 'SyntaxError' || e.name == 'ReferenceError') {
        alert('Ошибка ввода. Повторите ввод.');
        evalCalc();

      } else if (e.name == 'MathError') {
        alert(e.name + ': ' + e.message);
        evalCalc();

      } else {
        throw e;
      }

    }

  }
}

evalCalc();
