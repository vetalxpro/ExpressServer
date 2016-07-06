'use strict';

// ===========ES-2015 сейчас

// Деструктуризация

// var [firstName, lastName] = ['Petya', 'Ivanov'];
// console.log(firstName);
// console.log(lastName);

// // ================spread (...)

// var [, , title,...rest] = 'title1, title2, title3, title4, title5'.split(', ');
// console.log(title);
// console.log(rest);

// var [firstName = 'Guest',lastName = 'Anonymous'] = ['name'];
// console.log(firstName);
// console.log(lastName);

// function defaultLastName(){

// 	return new Date().toLocaleTimeString() + '-visitor';
// }
// var[firstName,lastName = defaultLastName()] = ['Ivan'];
// console.log(firstName);
// console.log(lastName);

//================ Деструктуризация массива
// let [var1 = default, var2, ...rest] = array

//================ Деструктуризация объекта
// let {prop : varName = default, ...} = object


// var options = {
// 	title:'Menu',
// 	width:100,
// 	height:200
// };

// var {title,width,height} = options;
// console.log(title);
// console.log(width);
// console.log(height);

// var {title,width:w,height:h,size:s = 300} = options;
// console.log(title);
// console.log(w);
// console.log(h);
// console.log(s);

// {
// 	let options = {
// 		size:{
// 			width:100,
// 			height:200
// 		},
// 		items:['item1','item2']
// 	};

// 	let{title='Menu',size:{width,height},items:[item1,item2]}=options;
// 	console.log(title);
// 	console.log(width);
// 	console.log(item2);

// }


// =================Функции

// function showMenu(title = 'Undef',width=100,height=200){
// 	console.log('%s %s %s',title,width,height);
// }
// showMenu('Menu',600);


// ==================Оператор spread вместо dialogArguments

// function showName(...arg) {
//   console.log('%s', arg.join(' '));
//   return arg;
// }
// console.log(showName('a', 'b', 'c', 'd', 'e'));

// var numbers = [1, 2, 5, 100, 3, 60];
// console.log(Math.max(...numbers));


// var options = {
//   title: 'Menu',
//   width: 200,
//   height: 300
// };

// function showMenu({ title, width, height }) {
//   return `${title} ${width} ${height}`;
// }
// console.log(showMenu(options));

// // Имя «name»
// console.log(showMenu.name);

// // =============Функции через =>

// var inc = (x) => x + 1; // var inc = function(x){return x + 1};
// console.log(inc(2));


// var arr = [5, 8, 3, 6, 9];
// console.log(arr.sort((a, b) => a - b));


// function defer(func, ms) {
//   return function() {
//     setTimeout(() => func.apply(this,arguments), ms);
//   }
// }

// function sum(a, b) {
//   console.log(a + b);
// }
// sum = defer(sum, 2000);
// sum(5, 8);


// =============Строки
// var var1='value';
// var str = `строка
// 	новая строка and ${var1}`;
// console.log(str);

// var apples = 2;
// var oranges = 3;
// console.log(`${apples} + ${oranges} = ${apples+oranges}`);


// // ===================Функции шаблонизации

// function f(strings,...values){
// 	console.log(JSON.stringify(strings));
// 	console.log(JSON.stringify(values));
// }
// var str = f`sum of ${apples} and ${oranges}`;

// function str(strings,...values){
// 	let str  = '';
// 	console.log(values);
// 	for(let i = 0 ; i<values.length;i++){
// 		console.log(strings[i]);
// 		console.log(values[i]);
// 		str+=strings[i]+values[i];
// 		// str+=values[i];
// 	}
// 	str+=strings[strings.length-1];
// 	return str;
// }
// var apples = 3;
// var oranges = 5;
// console.log(str`Sum of ${apples} + ${oranges} = ${apples + oranges}!`);


// var message = {
//   "Hello, {0}!": "Привет, {0}"
// };

// function i18n(strings, ...values) {
//   let pattern = '';
//   for (let i = 0; i < values.length; i++) {
//     pattern += strings[i] + '{' + i + '}';
//     console.log(pattern);
//   }
//   pattern += strings[strings.length - 1];

//   let translated = message[pattern];

//   return translated.replace(/\{(\d)\}/g, (s, num) => values[num]);
// }
// var name = 'Ivan';
// console.log(i18n `Hello, ${name}!`);


// ==================Улучшена поддержка юникода
// console.log('我'.length);
// console.log( '𝒳'.charCodeAt(0) + ' ' + '𝒳'.charCodeAt(1) ); // 55349 56499
// console.log('𝒳'.codePointAt(0));
// console.log(String.fromCharCode(119987));
// console.log(String.fromCodePoint(119987));

// // новые методы 'char'.codePointAt(0)    and   String.fromCodePoint(charCode);
// // \u{длинный код}
// console.log('\u{20333}');

// // Unicode-нормализация
// console.log("S\u0307\u0323"); // Ṩ
// console.log('S\u0307\u0323'.normalize());


// str.includes(s) – проверяет, включает ли одна строка в себя другую, возвращает true/false.
// str.endsWith(s) – возвращает true, если строка str заканчивается подстрокой s.
// str.startsWith(s) – возвращает true, если строка str начинается со строки s.
// str.repeat(times) – повторяет строку str times раз.


// ==============Объекты и прототипы

// var name  = 'Ivan';
// var isAdmin = true;

// var user = {
// 	name,
// 	isAdmin
// };
// console.log(JSON.stringify(user));


// var propertyName = 'firstName';
// var user = {
// 	[propertyName]:'Vasya'
// }
// console.log(user);

// ====================Геттер-сеттер для прототипа
// Object.getPrototypeOf(obj)
// Object.setPrototypeOf(obj, newProto)

//============= Object.assign

// var user = {
// 	name:'Vasya'
// };
// var visitor = {
// 	isAdmin:false,
// 	visits:true
// };
// var admin = {
// 	isAdmin : true
// };

// Object.assign(user,visitor,admin);
// console.log(JSON.stringify(user));

// var clone = Object.assign({},user);
// console.log(clone);


// ====Object.is(value1, value2)

// Сравнение +0 и -0
// console.log( Object.is(+0, -0)); // false
// console.log( +0 === -0 );        // true

// // Сравнение с NaN
// console.log( Object.is(NaN, NaN) ); // true
// console.log( NaN === NaN );         // false


// =================Методы объекта

// var name = 'Vasya';
// var user = {
// 	name,
// 	get sayHi(){
// 		console.log('Hi '+this.name);
// 	},
// 	set sayHi(val = 'default'){
// 		console.log('Hi '+this.name+' from '+val);
// 	}
// }
// user.sayHi;
// user.sayHi='Petya';


// ==============super

// var animal = {
// 	walk(){
// 		console.log("I'm walking");
// 	}
// };

// var rabbit = {
// 	walk(){
// 		console.log(super.walk);
// 		super.walk();
// 	}
// }
// rabbit.__proto__=animal;
// rabbit.walk();


// =====================Классы

// class Название [extends Родитель]  {
//   constructor
//   методы
// }

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log('Hi ' + this.name);
//   }
//   get getName(){
//   	console.log(this.name);
//   }
//   set setName(name){
//   	this.name = name;
//   }
// }

// var user = new User('Petya');
// user.sayHi();
// user.getName;
// user.setName = 'Vasya';
// user.getName;
// user.sayHi();

// var User = class {
// 	sayHi(){
// 		console.log('Hi');
// 	}
// }
// new User().sayHi();


// var allModels = {};

// function createModel(Model,...args){
// 	var model = new Model(...args);
// 	model._id = Math.random().toString(36).slice(2);
// 	allModels[model._id] = model;
// 	return model;
// }

// var user = createModel(class User{
// 	constructor(name){
// 		this.name = name;
// 	}
// 	sayHi(){
// 		console.log('Hi '+this.name);
// 	}
// },'Ivan');

// user.sayHi();
// console.log(allModels[user._id].name);


// ==============Геттеры, сеттеры и вычисляемые свойства

// class User {

//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get fullName() {
//     return this.firstName + ' ' + this.lastName;
//   }

//   set fullName(newFullName) {
//       [this.firstName, this.lastName] = newFullName.split(' ');
//   }

//   ['test'.toUpperCase()]() {
//       console.log('pass');
//   }
//   static createGuest(){
//   	return new User('This is','Guest');
//   }


// };

// var user = new User('Petya', 'Ivanov');
// console.log(user.fullName);
// user.fullName = 'Ivan Popov';
// console.log(user.fullName);
// user.TEST();
// var guest = User.createGuest();
// console.log(guest);


// class Menu{
// 	static get elemClass(){
// 		return 'menu';
// 	}
// };
// console.log(Menu.elemClass);


// ===============Наследование

// class Child extends Parent {
//   ...
// }

// class Animal{
// 	constructor(name){
// 		this.name = name;
// 	}
// 	walk(){
// 		console.log(this.name+" is walking");
// 	}
// }

// class Rabbit extends Animal{
// 	constructor(name,speed){
// 		super(name);
// 		this.speed = speed;
// 	}
// 	walk(){
// 		super.walk();
// 		console.log('and jumping');
// 	}
// 	toString(){
// 		return this.name +' '+this.speed;
// 	}
// }
// var rab = new Rabbit('rabbit',30);
// console.log(rab.toString());
// rab.walk();


// ==================Тип данных Symbol

// let sym = Symbol('name');
// console.log(typeof sym);
// console.log(sym);

// // Глобальные символы
// // создание символа в реестре
// let name = Symbol.for("name");

// // символ уже есть, чтение из реестра
// console.log( Symbol.keyFor(name) );

// let isAdmin = Symbol('isAdmin');
// let user = {
// 	name:'Vasya',
// 	[isAdmin]:true
// };
// console.log(user[isAdmin]);

// let user = {
//   name: "Вася",
//   age: 30,
//   [Symbol.for("isAdmin")]: true
// };

// // в цикле for..in также не будет символа
// console.log( Object.keys(user) ); // name, age

// // доступ к свойству через глобальный символ — работает
// console.log( user[Symbol.for("isAdmin")] );

// let obj = {
//   iterator: 1,
//   [Symbol.iterator]() {}
// }

// console.log(obj.iterator); // 1
// console.log(obj[Symbol.iterator]) // function, символ не конфликтует

// console.log(Object.getOwnPropertySymbols(obj));
// console.log(Object.getOwnPropertyNames(obj));


// ================Итераторы

// var arr = [1,2,3,4,5,6];
// for(let value of arr){
// 	console.log(value);
// }
// var str = 'string';
// for(let char of str){
// 	console.log(char);
// }

// let range = {
//   from: 1,
//   to: 5
// }

// range[Symbol.iterator] = function() {
//   let current = this.from;
//   let last = this.to;

//   return {
//     next() {
//       if (current <= last) {
//         return {
//           done: false,
//           value: current++
//         };
//       } else {
//         return {
//           done: true
//         };
//       }
//     }
//   }
// };
// for (let num of range) {
//   console.log(num);
// }

// let range = {
//   from: 1,
//   to: 5,
//   [Symbol.iterator](){
//   	return this;
//   },
//   next(){
//   	if(this.current == undefined){
//   		this.current = this.from;
//   	}
//   	if(this.current <=this.to){
//   		return{
//   			done:false,
//   			value:this.current++
//   		};
//   	}else{
//   		delete this.current;
//   		return{
//   			done:true
//   		};
//   	}
//   }
// };

// for(let num of range){
// 	console.log(num);
// }
// console.log(Math.max(...range));

// let range = {
//   from: 1,
//   to: 5
// };
// range[Symbol.iterator] = function() {
//   let current = this.from;
//   let last = this.to;
//   return {
//     next() {
//       if (current <= last) {
//         return {
//           done: false,
//           value: current++
//         }
//       } else {
//         return {
//           done: true
//         };
//       }
//     }
//   };
// }
// for (let num of range) {
//   console.log(num);
// }
// console.log(Math.max(...range));

// var str = 'string';
// // for(let num of str){
// // 	console.log(num);
// // }
// let iterator = str[Symbol.iterator]();
// while(true){
// 	let result = iterator.next();
// 	if(result.done) break;
// 	console.log(result.value);
// }


// ======================Set, Map, WeakSet и WeakMap

//============================= Map
// var map = new Map();
// map.set('1','str1');
// map.set(1,5);
// console.log(map.get(1));
// console.log(map.size);

// var map1 = new Map([
// 	['1','str1'],
// 	[1,'num1'],
// 	[true,'bool1']
// 	]);
// console.log(map1.get(true));

// var user = {name:'Vasya'};
// var visitsCountMap = new Map();
// visitsCountMap.set(user,123);
// console.log(visitsCountMap.get(user));

// map1.delete(1);
// console.log(map1);
// console.log(map1.has(true));

// map.set()
// map.get(key)
// map.delete(key)
// map.clear()
// map.has(key)

// map.keys() – возвращает итерируемый объект для ключей,
// map.values() – возвращает итерируемый объект для значений,
// map.entries() – возвращает итерируемый объект для
// записей [ключ, значение], он используется по умолчанию в for..of.

// var recipeMap = new Map([
// 	['огурцов',   '500 гр'],
//   ['помидоров', '350 гр'],
//   ['сметаны',   '50 гр']
// ]);

// for(let fruit of recipeMap.keys()){
// 	console.log(fruit);
// }
// for(let value of recipeMap.values()){
// 	console.log(value);
// }
// for(let entry of recipeMap.entries()){
// 	console.log(entry);
// }
// recipeMap.forEach((value,key,map)=>{
// 	console.log(`${key} : ${value}`);
// });


// ======================Set

// var set = new Set();

// var vasya = {name:'Vasya'};
// var petya = {name:'Petya'};
// var dasha = {name:'Dasha'};

// set.add(vasya);
// set.add(petya);
// set.add(dasha);
// set.add(vasya);
// set.add(petya);

// console.log(set.size);
// console.log(set);

// // set.add(item) – добавляет в коллекцию item, возвращает set (чейнится).
// // set.delete(item) – удаляет item из коллекции, возвращает true, если он там был, иначе false.
// // set.has(item) – возвращает true, если item есть в коллекции, иначе false.
// // set.clear() – очищает set.

// var set = new Set(["апельсины", "яблоки", "бананы"]);
// set.forEach((value,valueAgain,set)=>{
// 	console.log(value);
// });


// =======================WeakMap и WeakSet

// let activeUsers = [
//   {name: "Вася"},
//   {name: "Петя"},
//   {name: "Маша"}
// ];

// // вспомогательная информация о них,
// // которая напрямую не входит в объект юзера,
// // и потому хранится отдельно
// let weakMap = new WeakMap();

// weakMap.set(activeUsers[0],1);
// weakMap.set(activeUsers[1],2);
// weakMap.set(activeUsers[2],3);

// console.log( weakMap.get(activeUsers[0])); // 1
// console.log( weakMap );
// activeUsers.splice(0,2);
// console.log( weakMap );


// =============Promise

// var promise = new Promise(function(resolve,reject){
// 	 // Эта функция будет вызвана автоматически

//   // В ней можно делать любые асинхронные операции,
//   // А когда они завершатся — нужно вызвать одно из:
//   // resolve(результат) при успешном выполнении
//   // reject(ошибка) при ошибке
// });

// promise.then(onFulfilled, onRejected)
// onFulfilled – функция, которая будет вызвана с результатом при resolve.
// onRejected – функция, которая будет вызвана с ошибкой при reject.

// let p = new Promise((resolve,reject)=>{
// 	throw new Error('test err');
// });
// p.catch(console.log);

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('result');
//     // reject(new Error('err'));
//   }, 1000);
//   setTimeout(()=>{
//   	reject('err');
//   },2000);
// });

// promise
//   .then(
//     result => {
//       console.log(result);
//     },
//     error => {
//       console.log(error);
//     }
//   );


// =====================Промисификация

function httpGet(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      // console.log(this);
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error('Network error'));
    };

    xhr.send();
  });
}
// httpGet('http://localhost:8770/json/user.json')
//   .then(
//     response => {
//       console.log(response);
//       let user = JSON.parse(response);
//       return user;
//     })
//   .then(user => {
//     console.log(user);
//     return httpGet(`https://api.github.com/users/${user.name}`);
//   })
//   .then(
//   	check=>{
//   		return check;
//   	},
//   	error=>{
//   		if(error.code==404){
//   			return '{"avatar_url":"https://billing.tira.com.ua/images/billing_logo.png"}';
//   		}else{
//   			throw error;
//   		}
//   	}
//   )
//   .then(githubUser => {
//     // console.log(githubUser);
//     githubUser = JSON.parse(githubUser);

//     let img = new Image();
//     img.src = githubUser.avatar_url;
//     img.className = 'promise-avatar-example';
//     document.body.appendChild(img);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // img.remove();
//         resolve('finished');
//       }, 3000);
//     });

//   	}
//   )
//   .then(
//     resolve => console.log(resolve))
//   .catch(
//     error => console.log(error));


// ================Параллельное выполнение

// ============Promise.all(iterable)

// Promise.all([
// 	httpGet('http://localhost:8770/json/user.json'),
// 	httpGet('http://localhost:8770/json/guest.json')
// ]).then(
// 		result=>{
// 			console.log(result);
// 		}
// 	);

// let urls = [
// 	'http://localhost:8770/json/user.json',
// 	'http://localhost:8770/json/guest.json'
// ];

// Promise.all(urls.map(httpGet))
// 	.then(result=>{
// 		console.log(result);
// 	});

// // ======================Promise.race(iterable)

// Promise.race(urls.map(httpGet))
// 	.then(result=>{
// 		console.log(result);
// 	})


// =================Promise.resolve(value)

// new Promise((resolve) => resolve(value))  //analog
// Promise.resolve(window.location) // начать с этого значения
//   .then(httpGet) // вызвать для него httpGet
//   .then(console.log) // и вывести результат

// ========================Promise.reject(error)

// Promise.reject(new Error("..."))
//   .catch(console.log) // Error: ...


// function delay(ms) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(resolve, ms);
//   });
// }

// delay(1000).then(() => console.log('Hello'));


// let urls = [
// 	'user.json',
// 	'guest.json'
// ];
// let result = [];
// let promise = new Promise(function(resolve,reject){
// 	// let result = [];
// 	resolve(urls[0]);
// })
// .then(
// 	resolve=>{
// 		result.push(resolve);
// 		return new Promise((resolve,reject)=>resolve(urls[1]));
// 	})
// .then(
// 	resolve=>result.push(resolve));
// setTimeout(()=>console.log(result),1000);
// // console.log(result[0]);



// let urls = [
//   'user.json',
//   'guest.json'
// ];

// let result = [];
// let chain = Promise.resolve();

// urls.forEach(function(url) {
//   chain = chain
//     .then(() => url.toUpperCase().slice(0,-5))
//     .then((res) => result.push(res));
// });

// chain.then(() => console.log(result));



// =====================Генераторы

// function* generateSequence(){
// 	yield 1;
// 	yield 2;
// 	return 3;
// }

// let generator = generateSequence();

// // let one = generator.next();
// // console.log(one);
// // console.log(generator.next());
// // console.log(generator.next());

// for(let value of generator){
// 	console.log(value);
// }


// =======================Композиция генераторов

function* generateSeq(start,end){
	for(let i =start;i<=end;i++){
		yield i;
	}
}

let sequence = [...generateSeq(2,5)];
console.log(sequence);