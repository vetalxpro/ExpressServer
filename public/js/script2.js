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


//===================================================
// var user = {
// 	name:'Vasya',
// 	sayHi:function(){
// 		showName(this);
// 		}
// }
// function showName(obj){
// 		console.log(obj.name);
// }

// user.sayHi();
// user.sayHi=function(){
// 	console.log('GoodBye '+this.name);
// };
// user.sayHi();

// var user = {
// 	name:'user'
// };
// var admin = {
// 	name:'admin'
// };
// function showNameFunc(){
// 	console.log(this.name);
// }
// user.showName=showNameFunc;
// admin.showName=showNameFunc;
// user.showName();
// admin.showName();


// function func(){
// 	console.log(this);
// }
// func();


// var arr = ['a', 'b'];
// arr.push(function() {
//   console.log(this);
// });
// arr[2]();


// var obj = {
//   go: function() {
//     console.log(this);
//   }
// };
// (obj.go)();


// var obj, method;

// obj={
// 	go:function(){
// 		console.log(this);
// 		}
// };
// obj.go();  						//obj
// (obj.go)();						//obj
// (method=obj.go)();		//undef
// (obj.go||obj.stop)();	//undef


// var user = {
// 	firstName:'Vasya',
// 	export:this
// };
// console.log(user.export.firstName);

// var name='';
// var user = {
// 	name:'Vasya',
// 	export:function(){
// 		return this;
// 	}
// };
// console.log(user.export().name);

// var name='';
// var user={
// 	name:'Vasya',
// 	export:function(){
// 		return{
// 			value:this
// 		};
// 	}
// };
// console.log(user.export().value.name);

// var calculator = {
//   read: function() {
//     calculator.a = +prompt('Первое число', '0');
//     calculator.b = +prompt('Второе число', '0');
//   },
//   sum: function() {
//     return this.a + this.b;
//   },
//   mul: function() {
//     return this.a * this.b;
//   }

// };
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());
// console.log(calculator);


// var ladder = {
//   step: 0,
//   up: function() {
//     this.step++;
//     return this;
//   },
//   down: function() {
//     this.step--;
//     return this;
//   },
//   showStep: function() {
//     console.log(this.step);
//     return this;
//   }
// };
// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep(); // 1
// ladder.up().up().down().up().down().down().down().showStep(); // 1

// ==============Преобразование объектов: toString и valueOf

// if([]&&{})console.log('Объекты - true');

// var user = {
// 	name:'Vasya',
// 	surName:'Petrov',
// 	age:'25',
// 	toString:function(){
// 		return 'Пользователь '+ this.name;
// 	}
// }
// console.log(''+user);
// console.log(function(){});

// var room = {
// 	number:777,
// 	valueOf:function(){
// 		return this.number;
// 	},
// 	toString:function(){
// 		return this.number;
// 	}
// }
// console.log(room.toString());
// console.log(room.valueOf());
// console.log(new Date());
// console.log(+new Date());
// console.log(new Date()+'');

// var a = {
//   valueOf: function() {
//     return "1";
//   }
// };
// var b = {
//   valueOf: function() {
//     return "2";
//   }
// };

// console.log( a + b ); // "12"
// console.log( a - b ); // "1" - "2" = -1


// console.log(['x']=='x');  //true


// var foo={
// 	toString:function(){
// 		return 'foo'
// 	},
// 	valueOf:function(){
// 		return 2;
// 	}
// };
// alert(foo); //foo
// console.log(foo+1);//3
// console.log(foo+'3');//23

// console.log([]==[]);
// console.log([]!=[]);

// new Date(0) - 0					//0
// new Array(1)[0] + ""		//undef
// ({})[0]									//undef
// [1] + 1									//11
// [1,2] + [3,4]						//1,23,4
// [] + null + 1						//null1
// [[0]][0][0]							//0
// ({} + {})								//obj obj

// function sum(a){
// 	var curSum=a;
// 	function f(b){
// 		curSum+=b;
// 		return f;
// 	}
// 	f.toString = function(){
// 		return curSum;
// 	}
// 	return f;
// }


// console.log(+sum(1)(2)(10));

// ============Создание объектов через "new"

// function Animal(name) {
//   this.name = name;
//   this.canWalk = true;
//   this.toString = function() {
//     return this.name;
//   }
// }
// var animal1 = new Animal('ежик');
// var animal2 = new Animal('волк');
// console.log('' + animal1 + ' ' + animal2);

// function User(name){
// 	var message = 'Hi';
// 	this.name=name;
// 	this.sayHi=function(){
// 		console.log(message+' I am '+this.name);
// 	}
// }
// var ivan = new User('Ivan');
// ivan.sayHi();

// var obj = {}

// function A(lable) {
//   this.lable = lable;
//   return obj;
// }

// function B(lable) {
//   this.lable = lable;
//   return obj;

// }
// var a = new A('a');
// var b = new B('b');

// console.log(a == b); //true


// function Calculator() {
//   this.read = function() {
//     this.a = +prompt('a', '');
//     this.b = +prompt('b', '');
//   }
//   this.sum = function() {
//     return this.a + this.b;
//   }
//   this.mul = function() {
//     return this.a * this.b;
//   }
// }
// var calc = new Calculator();
// calc.read();
// console.log('Сумма = '+calc.sum());
// console.log('Произведение = '+calc.mul());


// function Accumulator(startingValue){
// 	this.value = startingValue;
// 	this.read = function(){
// 		while(true){
// 			var n =+prompt('enter value','');
// 			console.log(n);
// 			if(isNaN(n)) break;
// 			this.value+=n;
// 		}
// 	}
// }
// var acc1=new Accumulator(1);
// acc1.read();
// console.log(acc1.value);


// function Calculator() {
//   this.result = 0;
//   var methods = {
//     '+': function(a, b) {
//       return a + b;
//     },
//     '-': function(a, b) {
//       return a - b;
//     }
//   }
//   this.calculate = function(str) {
//     var strArr = str.split(' ');
//     var a = +strArr[0];
//     var operation = strArr[1];
//     var b = +strArr[2];
//     if (!methods[operation] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return methods[operation](a, b);

//   }
//   this.addMethod = function(operation, func) {
//     methods[operation] = func;
//   }


// }
// var calc = new Calculator();
// console.log(calc.calculate('3 + 7'));

// console.log(calc.calculate('3 - 7'));

// calc.addMethod('*', function(a, b) {
//   return a * b;
// });
// console.log(calc.calculate('3 * 7'));

// calc.addMethod('/', function(a, b) {
//   return a / b;
// });
// console.log(calc.calculate('50 / 10'));

// calc.addMethod('**', function(a, b) {
//   return Math.pow(a, b);
// });
// console.log(calc.calculate('3 ** 2'));

//============Дескрипторы, геттеры и сеттеры свойств

// Object.defineProperty(obj,prop,descriptor)

// var user = {
// 	toString:function(){
// 		return this.name;
// 	}
// };
// Object.defineProperty(user,'toString',{enumerable:false});

// Object.defineProperty(user,'name',{
// 	value:'Vasya',
// 	writable:true,
// 	configurable:true,
// 	enumerable:true
// });
// console.log(user);

// Object.defineProperty(user,'name',{
// 	writable:false,
// 	configurable:false
// });

// var user = {
// 	firstName:'Vasya',
// 	lastName:'Petrov'
// };
// Object.defineProperty(user,'fullName',{
// 	get:function(){
// 		return this.firstName+' '+this.lastName;
// 	},
// 	set:function(str){
// 		var split = str.split(' ');
// 		this.firstName = split[0];
// 		this.lastName = split[1];
// 	},
// 	enumerable:true
// });

// var user = {
// 	firstName : 'Vasya',
// 	lastName:'Petrov',
// 	get fullName(){
// 		return this.firstName+' '+this.lastName;
// 	},
// 	set fullName(str){
// 		var split = str.split(' ');
// 		this.firstName=split[0];
// 		this.lastName=split[1];
// 	}
// };
// console.log(user.fullName);
// user.fullName='Vladimir Putin';
// console.log(user.fullName);


// function User(name, birthday) {
//   this.name = name;
//   this.birthday = birthday;
//   Object.defineProperties(this, {

//     age: {
//       get: function() {
//         return new Date().getFullYear() - birthday.getFullYear();
//       }
//     },

//     toString: {
//       value: function() {
//         return this.name + ' ' + this.age;
//       },
//       enumerable:false
//     }

//   });
// }
// var petya = new User('Petya', new Date(1988, 3, 4));
// console.log('' + petya);

// // Object.keys(obj)
// // Object.getOwnPropertyNames(obj)
// // Object.getOwnPropertyDescriptor(obj, prop)

// var descriptor = Object.getOwnPropertyDescriptor(petya,'name');
// console.log(descriptor);
// delete descriptor.value;
// delete descriptor.writable;
// descriptor.get=function(){
// 	return 'LOL';
// }
// delete petya.name;
// Object.defineProperty(petya,'name',descriptor);

// Object.preventExtensions(obj) Запрещает добавление свойств в объект.
// Object.seal(obj) Запрещает добавление и удаление свойств, все текущие свойства делает configurable: false.
// Object.freeze(obj) Запрещает добавление, удаление и изменение свойств, все текущие свойства делает configurable: false, writable: false.
// Object.isExtensible(obj) Возвращает false, если добавление свойств объекта было запрещено вызовом метода Object.preventExtensions.
// Object.isSealed(obj) Возвращает true, если добавление и удаление свойств объекта запрещено, и все текущие свойства являются configurable: false.
// Object.isFrozen(obj) Возвращает true, если добавление, удаление и изменение свойств объекта запрещено, и все текущие свойства являются configurable: false, writable: false.


// function User(fullName) {
//   this.fullName = fullName;

//   Object.defineProperties(this, {
//     firstName: {
//       get: function() {
//         return this.fullName.split(' ')[0];
//       },

//       set: function(newFirstName) {
//         this.fullName = newFirstName + ' ' + this.lastName;
//       }
//     },

//     lastName: {
//       get: function() {
//         return this.fullName.split(' ')[1];
//       },

//       set: function(newLastName) {
//         this.fullName = this.firstName + ' ' + newLastName;
//       }
//     }
//   });
// }
// var vasya = new User('Василий Попкин');
// console.log(vasya);


// console.log(vasya.firstName);
// console.log(vasya.lastName);
// vasya.firstName = 'Иван';
// console.log(vasya.fullName);


//=====================Статические и фабричные методы



// function Article(){
// 	Article.count++;
// 	Article.showCount=function(){
// 		console.log(this.count);
// 	}
// 	this.number = Article.count;

// }

// Article.count = 0;


// var a = new Article();
// var b =new Article();
// var c =new Article();
// Article.showCount();


// function Journal(date) {
//   this.date = date;
//   Journal.formatDate = function(date) {
//     return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
//   };
//   this.getTitle = function() {
//     return 'Выпуск от ' + Journal.formatDate(this.date);
//   }
// }
// var journals = [
//   new Journal(new Date(1938, 3, 8)),
//   new Journal(new Date(1975, 4, 10)),
//   new Journal(new Date(1945, 5, 25))
// ];

// console.log(journals[2].getTitle());

// Journal.compare = function(journalA, journalB) {
//   return journalA.date - journalB.date;
// };

// function findMin(journals) {
//   var min = 0;
//   journals.forEach(function(item, i) {
//     if (Journal.compare(journals[min], item) > 0) min = i;
//   });
//   return journals[min];
// }
// console.log(findMin(journals).getTitle()+'\n\n');

// journals.sort(Journal.compare);
// journals.forEach(function(item){
// 	console.log(item.getTitle());
// });
// console.log(Journal.formatDate(new Date()));

// function User() {
//   this.sayHi = function() {
//     return 'I am ' + this.name;
//   };
//   Object.defineProperty(this, 'toString', {
//     value: function() {
//       return this.name;
//     }
//   })
// }
// User.createAnonymous = function() {
//   var user = new User();
//   user.name = 'anonymous';
//   return user;
// };
// User.createUserFromData = function(data) {
//   var user = new User();
//   user.name = data.name;
//   user.age = data.age;
//   return user;
// };
// User.createAdmin = function() {
//   var user = new User();
//   user.name = 'Petya';
//   user.admin = true;
//   return user;
// };

// var anonymous = User.createAnonymous();
// var vasya = User.createUserFromData({ name: 'Vasya', age: 25 });
// var adminPetya = User.createAdmin();
// var users = [anonymous, vasya, adminPetya];
// users.forEach(function(user) {
//   if (user.admin) console.log(user);
// });



// function Article() {
//   this.created = new Date();
//   Article.count++;
//   this.number = Article.count;
//   Article.last = ('0'+this.created.getHours()).slice(-2) + ':' + ('0'+this.created.getMinutes()).slice(-2) + ':' + ('0'+this.created.getSeconds()).slice(-2);
//   Article.showStats = function() {
//     return 'Всего: ' + this.count + ', последняя: ' + this.last;
//   }
// }
// Article.count = 0;
// Article.last = null;

// var a = new Article();
// var b = new Article();
// new Article();
// console.log(Article.showStats());

//================Явное указание this: "call", "apply"

// func.call(context, arg1, arg2, ...)

// function showFullName(name,surname){
// 	console.log(this[name] + ' '+this[surname]);
// }
// var user={
// 	firstName:'Ivan',
// 	lastName:'Petrov'
// }
// showFullName.call(user,'firstName','lastName');


// function printArgs(){
// 	arguments.join = [].join;
// 	var args = arguments.join(':');
// 	console.log(args);
// }
// var a = printArgs(1,2,3);

// function printArgs(){
// 	var argsStr = [].join.call(arguments,'/');
// 	console.log(argsStr);
// 	var args = [].slice.call(arguments);
// 	console.log(args);
// 	var max = Math.max.apply(null,args);
// 	console.log(max);

// }
// printArgs(1,2,3,4,5);

// function f() {
//   // "use strict";
//   console.log( this ); // null
// }

// f.call(null);


// function sum(arr){
// 	return arr.reduce(function(a,b){
// 		return a+b;
// 	});
// }
// console.log(sum([1,2,3,4,5,6]));

// function sumArgs(){
// 	// var reduce = [].reduce;
// 	return [].reduce.call(arguments,function(a,b){
// 		return a+b;
// 	});

// }
// console.log(sumArgs(1,2,3,4,5,6));


// function applyAll(func){
// 	// var method = arguments[0];
// 	var argsArr = [].slice.call(arguments,1);
// 	return func.apply(this,argsArr);
// }

// console.log(applyAll(Math.max,2,-2,3));

// function sum(){
// 	return [].reduce.call(arguments,function(a,b){
// 		return a+b;
// 	});
// }
// function mul(){
// 	return [].reduce.call(arguments,function(a,b){
// 		return a*b;
// 	});
// }
// console.log(applyAll(mul,1,2,3,10));


// ======================Привязка контекста и карринг: "bind"
// setTimeout(function(){
// 	console.log('Hi');
// },1000);

// var user = {
// 	name:'Vasya',
// 	sayHi:function(who){
// 		console.log(this.name+who);
// 	}
// };

// function bind(func,context){
// 	return function(){
// 		return func.apply(context,arguments);
// 	};
// }

// var sayHi=bind(user.sayHi,user);
// sayHi('test');


// function f(a,b){
// 	console.log(this);
// 	console.log(a+b);
// }
// var g = f.bind('Context');
// g(1,2);

// var user = {
// 	name:'Ivan',
// 	sayHi:function(){
// 		console.log(this.name);
// 	}
// }

// setTimeout(user.sayHi.bind(user),1000);

// for(var method in user){
// 	if(typeof user[method]=='function'){
// 		user[method]=user[method].bind(user);
// 	}
// }

// function mul(a,b){
// 	console.log(a*b);
// }

// var double = mul.bind(null,2);
// double(3);
// var triple =mul.bind(null,3);
// triple(4);

// function ask(question,answer,yes,no){
// 	var result = prompt(question,'');
// 	if(result.toLowerCase()==answer.toLowerCase()){
// 		yes();
// 	}else{
// 		no();
// 	}
// }
// function yes(){
// 	console.log('реально наркоман');
// }
// function no(){
// 	console.log('нет? а похож!');
// }

// ask('Ты наркоман','да',yes,no);

// function f() {
//   console.log(this);
// }
// var user = {
//   g: f.bind('Hello')
// }
// user.g();


// function f() {
//   console.log(this.name);
// }

// f = f.bind({ name: 'Vasya' }).bind({ name: 'Petya' });
// f();


// function sayHi() {
//   console.log( this.name );
// }
// sayHi.test = 5;
// console.log( sayHi.test ); // 5

// var bound = sayHi.bind({
//   name: "Вася"
// });

// console.log( bound.test ); // что выведет? почему?


// function ask(question,answer,ok,fail){
// 	var result = prompt(question,'');
// 	if(result.toLowerCase()==answer.toLowerCase()){
// 		ok();
// 	}else{
// 		fail();
// 	}
// }

// var user = {
// 	login:'Vasya',
// 	password:'12345',

// 	loginOk:function(){
// 		console.log(this.login + ' entered');
// 	},
// 	loginFail:function(){
// 		console.log(this.login + ' error');
// 	},
// 	checkPassword:function(){
// 		ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
// 	}
// };
// // debugger;
// user.checkPassword();


// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');

//   if (result!=null && result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }

// var user = {
//   login: 'Василий',
//   password: '12345',

//   // метод для вызова из ask
//   loginDone: function(result) {
//   	if(result){
//   		console.log(this.login+' вошел на сайт');
//   	}else{
//   		console.log(this.login+' ошибка входа');
//   	}
//     // console.log( this.login + (result?' вошёл на сайт' : ' ошибка входа') );
//   },

//   checkPassword: function() {
//     ask("Ваш пароль?",
//     	this.password,
//     	this.loginDone.bind(this,true),
//     	this.loginDone.bind(this,false)
//     );
//   }
// };

// var vasya = user;
// user = null;
// // debugger;
// vasya.checkPassword();


//=================Функции-обёртки, декораторы


// var timers = {};

// function timingDecorator(f, timer) {
//   return function() {
//     var start = performance.now();
//     var result = f.apply(this, arguments);

//     if (!timers[timer]) timers[timer] = 0;
//     timers[timer] += performance.now() - start;

//     return result;
//   }
// }
// var fibonacci = function f(n) {
//   return (n > 2) ? f(n - 1) + f(n - 2) : 1;
// }
// fibonacci = timingDecorator(fibonacci, "fibo");

// console.log(fibonacci(10));
// console.log(fibonacci(20)); // 6765

// console.log(timers.fibo + '');



// function checkNumber(value) {
//   return typeof(value) == 'number';
// }

// function typeCheck(f, checks) {
//   return function() {
//     for (var i = 0; i < arguments.length; i++) {
//       if (!checks[i](arguments[i])) {
//         console.error('Некорректный тип аргумента номер ' + i);
//         return 'Ошибка';
//       }
//     }
//     return f.apply(this,arguments);
//   }
// }

// function sum(a, b) {
//   return a + b;
// }

// sum = typeCheck(sum, [checkNumber, checkNumber]);
// console.log(sum(1, 4));
// console.log(sum(0, 'd'));




// var petya={
// 	admin:true
// }
// var vasya={

// }
// // function isAdmin(user){
// // 	return user.admin;
// // }
// var user = petya;


// function checkPermissionDecorator(f) {
// 	function isAdmin(user){
// 	return user.admin;
// 	}
//   return function(user) {
//   	if (isAdmin(user)) {
//     	return f.apply(this, arguments);
//     }
//     console.log( 'Недостаточно прав' );
//   }
// }

// function save() {
// 	console.log(arguments);
// 	console.log('Вы админ');
// }

// save = checkPermissionDecorator(save);
// save(vasya);
// // Теперь вызов функции save() проверяет права


// function work(a){
// 	console.log('activate work function with arg '+a);
// }

// function makeLogging(f,log){
// 	return function(arg){
// 		f.call(this,arg);
// 		log.push(arg);
// 	}
// }
// var log = [];

// work = makeLogging(work,log);

// work(1);
// work(5);

// log.forEach(function(item){
// 	console.log('Log: '+item);
// });


// function work(a, b) {
//   console.log('Sum = ' + (a + b));
// }

// function makeLogging(func, log) {
//   function wrapper() {
//     // console.log(arguments);
//     log.push([].slice.call(arguments));
//     func.apply(this, arguments);
//   }
//   return wrapper;
// }

// var log = [];

// work = makeLogging(work, log);

// work(1, 2, 3);
// work(4, 5);

// log.forEach(function(item, i) {
//   console.log('Лог(%s): %s', i + 1, item.join());
// });


function f(x) {
  return (Math.random() * x).toFixed(2);
}

function makeCaching(f) {
  var cache = {};
  return function(arg) {
    if (arg in cache) {
      console.info('use cache for arg ' + arg + ' --> ' + cache[arg]);
    } else {
      console.warn('no cache for ' + arg);
      cache[arg] = f.call(this, arg);
    }
    return cache[arg];

  }
}

f = makeCaching(f);

var a = f(1);
var b = f(1);
var c = f(2);
var d = f(5);
var e = f(1);

console.log('a =' + a);
console.log('b =' + b);
console.log('c =' + c);
console.log('d =' + d);
console.log('e =' + e);
console.log(a == e && b == e && a == b);