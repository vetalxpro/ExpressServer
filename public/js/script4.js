'use strict';
// ==============ООП в функциональном стиле

// function CoffeeMachine(model, power, capacity) {
//   this.model = model;
//   const WATER_HEAT_CAPACITY = 4200;
//   var self = this;
//   var timerId;
//   var power = power;
//   var waterAmount = 0;
//   // var runState = false;

//   Object.defineProperty(this, 'setWaterAmount',{value:function(amount) {
//     if (amount < 0) {
//       throw new Error('Значение должно быть положительным');
//     }
//     if (amount > capacity) {
//       throw new Error('Нельзя залить воды больше, чем ' + capacity);
//     }
//     waterAmount = amount;
//   }});

//   this.getWaterAmount = function(){
//   	return waterAmount;
//   }


//   function getBoiledTime() {
//   	// console.log(power);
//     return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//   }

//   function onReady() {
//     console.log('Coffee ready!');
//   }
//   this.run = function() {
//   	// runState = true;
//     timerId = setTimeout(function(){
//     	/*runState = false; /*/timerId = null;
//     	onReady();

//     }, getBoiledTime());
//   }
//   this.stop = function() {
//     clearTimeout(timerId);
//     timerId = null;
//   }
//   this.getPower=function(){
//   	return power;
//   }
//   this.addWater = function(amount){
//   	this.setWaterAmount(waterAmount + amount);
//   }
//   this.setOnReady=function(newOnReady){
//   	onReady = newOnReady;
//   }
//   this.isRunning = function(){
//   	/*return runState; /*/ return !!timerId;
//   }

//   console.log('Создана кофеварка ' + model + ' с мощностью ' + power + ' ватт');
// }

// var coffeeMachine = new CoffeeMachine('Redmond', 20000,500);
// coffeeMachine.setWaterAmount(100);
// coffeeMachine.addWater(300);



// coffeeMachine.run();


// coffeeMachine.setOnReady(function() {
//   var amount = coffeeMachine.getWaterAmount();
//   console.log ( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
// });

// alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

// coffeeMachine.run();
// alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

// coffeeMachine.setOnReady(function() {
//   alert( "После: " + coffeeMachine.isRunning() ); // После: false
// });






// ===============Геттеры и сеттеры

// function User(){
// 	var firstName;
// 	var lastName;

// 	var setFirstName = function(name){
// 		firstName = name;
// 	}

// 	var setLastName = function(surname){
// 		lastName = surname;
// 	}

// 	var getFullName = function(){
// 		return firstName + ' '+lastName;
// 	}

// 	Object.defineProperties(this,{
// 		setFirstName:{value:setFirstName},
// 		setLastName:{value:setLastName},
// 		getFullName:{value:getFullName}
// 	});

// }

// var user = new User();
// user.setFirstName('Petya');
// user.setLastName('Ivanov');
// console.log(user.getFullName());


// =======================Функциональное наследование


// function Machine(power) {
//   this._enabled = false;
//   this._power = power;

//   this.enable = function() {
//     this._enabled = true;
//     console.log('Включен.');
//   };
//   this.disable = function() {
//     this._enabled = false;
//     console.log('Выключен.');
//   };
// }

// function CoffeeMachine(power, capacity) {
//   Machine.apply(this, arguments); //наследование
//   var timerId;
//   var waterAmount = 0;
//   var parentEnable = this.enable;
//   this.enable = function() {
//     console.log('Включена');
//     parentEnable.call(this);
//     // this.run();
//   }
//   var parentDisable = this.disable;
//   this.disable = function() {
//     parentDisable.call(this);
//     console.log('Выключена');
//     clearTimeout(timerId);

//   }

//   this.setWaterAmount = function(amount) {
//     waterAmount = amount;
//   };

//   this.run = function() {
//     // console.log(this._enabled);
//     if (!this._enabled) throw new Error('Сначала включите кофеварку.');

//     console.log('Запущена');
//     timerId = setTimeout(onReady, 4000);
//       // timerId = null;
//   };

//   var onReady = function() {
//     console.log('Coffee ready!');
//   }


// }

// function Fridge(power) {
//   Machine.apply(this, arguments);
//   var food= [];

//   this.addFood=function(){
//   	if(!this._enabled) throw new Error('Включите сначала холодильник!');

//   	for(var i = 0;i<arguments.length;i++){
//   		if(food.length>=(power/100)) throw new Error('Слишком много еды.');
//   		food.push(arguments[i]);
//   		console.log(arguments[i]+' добавлено');
//   	}

//   };
//   var parentDisable = this.disable;
//   this.disable = function(){
//   	if(!this._enabled) throw new Error('Холодильник и так выключен.');
//   	if(food.length) throw new Error('Нельзя выключить! В холодильнике есть еда.');
//   	parentDisable.call(this);

//   }

//   this.getFood = function(){
//   	// console.log(food.toString());
//   	return food.slice();
//   };

//   this.filterFood = function(func){
//   	return this.getFood().filter(func);

//   };



//   this.removeFood = function(item){
//   	var idToRemove = food.indexOf(item);
//   	if(idToRemove !=-1) food.splice(idToRemove,1);
//   };
//   console.log('Холодильник мощностью ' +power+'Вт');

// }


// var coffeeMachine = new CoffeeMachine(500);
// coffeeMachine.setWaterAmount(100);

// // coffeeMachine.enable();
// // setTimeout(function() { coffeeMachine.run() }, 2000);
// // setTimeout(function() { coffeeMachine.disable() }, 7000);

// // var fridge = new Fridge(500);
// // fridge.enable();
// // fridge.addFood('сок','зелень');
// // fridge.getFood();
// // fridge.addFood('помидоры','мороженое','5');
// // fridge.getFood();

// var fridge = new Fridge(500);
// // fridge.disable();
// fridge.enable();
// fridge.addFood({
//   title: "котлета",
//   calories: 100,
//   toString:function(){
//   	return this.title+'('+this.calories+')';
//   }
// });
// fridge.addFood({
//   title: "сок",
//   calories: 30,
//   toString:function(){
//   	return this.title+'('+this.calories+')';
//   }
// });
// fridge.addFood({
//   title: "зелень",
//   calories: 10,
//   toString:function(){
//   	return this.title+'('+this.calories+')';
//   }
// });
// fridge.addFood({
//   title: "варенье",
//   calories: 150,
//   toString:function(){
//   	return this.title+'('+this.calories+')';
//   }
// });

// // fridge.getFood();
// // fridge.removeFood("котлета");
// // fridge.removeFood("зелень");
// // fridge.getFood();
// fridge.removeFood("нет такой еды"); // без эффекта
// alert( fridge.getFood().length ); // 4

// var dietItems = fridge.filterFood(function(item) {
//   return item.calories > 0;
// });
// console.log(dietItems);

// dietItems.forEach(function(item) {
//   alert( item.title ); // сок, зелень
//   fridge.removeFood(item);
// });

// alert( fridge.getFood().length ); // 2

// alert(fridge.getFood());
// fridge.disable();



// =================ООП в прототипном стиле

// ====================Прототип объекта

// var animal = {
// 	eats :true
// };
// var rabbit = {
// 	jumps : true,
// 	// eats :true,
// 	__proto__:animal
// };

// console.log(rabbit.eats);
// console.log(rabbit.hasOwnProperty('eats'));

// for(let key in rabbit){
// 	if(!rabbit.hasOwnProperty(key)) continue;
// 	console.log(key+' = '+rabbit[key]);
// }

// var data = {
// 	text:'message',
// 	age:25
// }
// console.log(data);
// console.log(data.hasOwnProperty('toString')? data.toString:undefined);

// var data = Object.create(null);
// data.text = 'text';
// console.log(data.text);
// console.log(data.toString);

// console.log(Object.getPrototypeOf(rabbit));

// Чтение: Object.getPrototypeOf(obj)
// Запись: Object.setPrototypeOf(obj, proto)
// Создание объекта с прототипом:
// Object.create(proto, descriptors)

// var animal = {
// 	jumps : null,
// 	eat:function(){
// 		this.full = true;
// 	}
// };
// var rabbit = {
// 	jumps : true
// };

// rabbit.__proto__=animal;
// console.log(rabbit.jumps); //true
// delete rabbit.jumps;
// console.log(rabbit.jumps); // null
// delete animal.jumps;
// console.log(rabbit.jumps); // undefined

// rabbit.eat();

// var head = {
//   glasses: 1
// };

// var table = {
//   pen: 3
// };

// var bed = {
//   sheet: 1,
//   pillow: 2
// };

// var pockets = {
//   money: 2000
// };

// pockets.__proto__=bed;
// bed.__proto__=table;
// table.__proto__=head;


// =================Свойство F.prototype и
// создание объектов через new

// var animal = {
//   eats: true
// };

// function Rabbit(name) {
//   this.name = name;
//   // this.__proto__=animal;
// }

//=================Свойство F.prototype

// Rabbit.prototype = animal;
// var rabbit = new Rabbit('Robby');
// console.log(rabbit.eats);

// function Rabbit(name){
// 	this.name = name;
// 	console.log(name);
// }
// console.log(Object.getOwnPropertyNames(Rabbit));
// console.log(Rabbit.prototype.constructor == Rabbit);

// var rabbit1 = new Rabbit('name1');
// var rabbit2=new rabbit1.constructor('name2');

// // ===================Свойство constructor

// Rabbit.prototype = {
// 	jumps:true,
// 	constructor:Rabbit
// };
// Rabbit.prototype.jumps = true;


// ========================Эмуляция Object.create для IE8-

// function inherit(proto) {
//   function F() {}     // (1)
//   F.prototype = proto // (2)
//   var object = new F; // (3)
//   return object;      // (4)
// }
// 1)Создана новая функция F. Она ничего не делает с this, так что если вызвать new F, то получим пустой объект.
// 2)Свойство F.prototype устанавливается в будущий прототип proto
// 3)Результатом вызова new F будет пустой объект с __proto__ равным значению F.prototype.
// 4)Мы получили пустой объект с заданным прототипом, как и хотели. Возвратим его.
// if (!Object.create) Object.create = inherit;  определение inherit - выше


// var animal = {
//   eats: true
// };

// var rabbit = inherit(animal);

// console.log( rabbit.eats ); // true

// function Rabbit(){};

// Rabbit.prototype = {
// 	eats:true
// };

// var rabbit = new Rabbit();



// // Rabbit.prototype = {};  //true
// // Rabbit.prototype.eats = false;// false
// // delete rabbit.eats; // (*) true
// // delete Rabbit.prototype.eats; // (*) udef



// console.log(rabbit.eats);    //true



// function Menu(options){
// 	options = Object.create(options);
// 	options.width = options.width||300;
// 	options.height = options.height||600;
// 	// this.width = options.width;
// 	// this.height = options.height;
// 	console.log(options.width);
// 	console.log(options.height);

// }
// var options = {width:200};
// var menu = new Menu(options);
// // console.log(menu.width);
// // console.log(menu.height);


// function Rabbit(name){
// 	this.name = name;
// }
// Rabbit.prototype.sayHi = function(){
// 	console.log(this.name);
// }

// var rabbit = new Rabbit('Rabbit');

// rabbit.sayHi();   //Rabbit    все браузеры
// Rabbit.prototype.sayHi();//undefined   все браузеры
// Object.getPrototypeOf(rabbit).sayHi();//undefined    не работатает в ИЕ8-
// rabbit.__proto__.sayHi();//undefined   не работает в ИЕ10 -

// function Obj(){
// 	this.a = 1;
// 	this.b = 2;
// }
// Obj.prototype = {c:3,constructor:Obj};
// var obj = new Obj();
// console.log(Object.getOwnPropertyNames(obj));
// var obj1 = new obj.constructor();
// console.log(obj1.__proto__);
// for(var key in obj1) console.log('%s = %s',key,obj1[key]);


// =============================Встроенные "классы" в JavaScript


// var obj = {};
// var obj1 = new Object();
// console.log(obj+'');
// console.log(obj1);
// console.log(obj.__proto__.toString);
// console.log(obj.__proto__.__proto__); //null

// var f = function(){

// };
// console.log(Object.getOwnPropertyNames(Object));
// console.log(Object.getOwnPropertyNames(Object.prototype));
// console.log(Object.getOwnPropertyNames(Function.prototype));
// console.log(Object.getOwnPropertyNames(Array.prototype));
// console.log(Object.getOwnPropertyNames(String.prototype));
// console.log(Object.getOwnPropertyNames(Number.prototype));
// console.log(Object.getOwnPropertyNames(Boolean.prototype));

// console.log(Object.getOwnPropertyNames(Date.prototype));
// console.log(Object.getOwnPropertyNames(JSON));
// console.log(Object.getOwnPropertyNames(console));


// function showList(){
// 	console.log([].join.call(arguments,' - '));
// 	console.log(Array.prototype.join.call(arguments,' / '));
// }
// showList('name1','name2','name3');

// var user = "Вася"; // создали строку (примитив)

// console.log( user.toUpperCase() ); // ВАСЯ
// был создан временный объект new String
// вызван метод
// new String уничтожен, результат возвращён

// String.prototype.repeat = function(times){
// 	return new Array(times+1).join(this);
// };
// console.log('ля'.repeat(3));

// Object.prototype.each = function(f){
// 	for(var prop in this){
// 		var value = this[prop];
// 		f.call(value,prop,value);
// 	}
// }
// Object.defineProperty(Object.prototype, 'each', {
//   enumerable: false
// });

// var user = {
// 	name:'vasya',
// 	age:25
// };

// user.each(function(prop,val){
// 	console.log(prop);
// });

// if (!Object.create) {

//   Object.create = function(proto) {
//     function F() {}
//     F.prototype = proto;
//     return new F;
//   };

// }


// Function.prototype.defer = function(delay){
// 	var f = this;
// 	return function(){
// 		var context = this;
// 		var args = arguments;
// 		setTimeout(function(){
// 			f.apply(context,args);
// 		},delay);
// 	}
// };

// function f(a,b){
// 	console.log(a+b);
// }
// f.defer(1000)(1,2);
// console.log((Function.prototype.defer));

// ==============================Свои классы на прототипах

// =======Обычный конструктор
// function Animal(name) {
//   this.name = name;
//   this.speed = 0;
//   this.run = function(speed) {
//     this.speed += speed;
//     console.log(this.name + ' run with speed ' + this.speed);
//   };
//   this.stop = function() {
//     this.speed = 0;
//     console.log(this.name + ' stop with speed ' + this.speed);
//   };
// }





// =============Класс через прототип
// function Animal(name) {
//   this.name = name;
//   this.speed = 0;
// }
// Animal.prototype.run = function(speed) {
//   this.speed += speed;
//   console.log(this.name + ' run with speed ' + this.speed);
// };
// Animal.prototype.stop = function() {
//   this.speed = 0;
//   console.log(this.name + ' stop with speed ' + this.speed);
// };


// var animal = new Animal('beast');
// console.log(animal.name);
// animal.run(10);
// animal.stop();


// function CoffeeMachine(power) {
//   this._waterAmount = 0;
//   this._power = power;
// }
// CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;


// CoffeeMachine.prototype._getTimeBoil = function() {
//   return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
// };
// CoffeeMachine.prototype.run = function() {
//   setTimeout(function() {
//     console.log('Coffee Ready!');
//   }, this._getTimeBoil());
// };
// CoffeeMachine.prototype.setWaterAmount = function(amount) {
//   this._waterAmount = amount;
// };

// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.setWaterAmount(50);
// coffeeMachine.run();



// function Hamster(){
// 	this.food = [];
// }
// Hamster.prototype.found = function(something){
// 	this.food.push(something);
// };

// var speedy = new Hamster();
// var lazy = new Hamster();

// speedy.found('apple');
// speedy.found('nut');

// console.log(speedy.food);
// console.log(lazy.food);


// ===============Наследование классов в JavaScript

// console.dir([1,2,3,4,5]);

// function Animal(name){
// 	this.name = name;
// 	this.speed = 0;
// }

// Animal.prototype.run = function(speed){
// 	this.speed +=speed;
// 	console.log(this.name + ' бежит со скоростью '+this.speed);
// };
// Animal.prototype.stop = function(){
// 	this.speed = 0;
// 	console.log(this.name + ' стоит со скоростью ' +this.speed);
// };

// function Rabbit(name){
// 	// this.name = name;
// 	// this.speed = 0;
// 	Animal.apply(this,arguments);
// }

// Rabbit.prototype = Object.create(Animal.prototype);
// Rabbit.prototype.constructor = Rabbit;
// Rabbit.prototype.jump = function(){
// 	this.speed++;
// 	console.log(this.name+' прыгает');
// }
// // Rabbit.prototype.run = function(speed){
// // 	this.speed++;
// // 	this.jump();
// // };
// Rabbit.prototype.run = function(){
// 	Animal.prototype.run.apply(this,arguments);
// 	this.jump();
// }

// var rabbit = new Rabbit('Bunny');
// rabbit.jump();
// // console.log(rabbit.speed);
// rabbit.run(10);


// function Animal(name){
// 	this.name = name;
// }
// Animal.prototype.walk = function(){
// 	console.log('walk '+ this.name);
// };
// function Rabbit(name){
// 	this.name = name;
// }
// Rabbit.prototype = Object.create(Animal.prototype);
// Rabbit.prototype.constructor = Rabbit;

// Rabbit.prototype.walk = function(){
// 	console.log('jumping and walking '+this.name);
// };
// var rabbit = new Rabbit('Rab');
// rabbit.walk();


// function Animal(name) {
//   this.name = name;

// }
// Animal.prototype.walk = function() {
//     console.log( "ходит " + this.name );
// };

// function Rabbit(name) {
//   Animal.apply(this, arguments);
// }
// Rabbit.prototype = Object.create(Animal.prototype);

// Rabbit.prototype.walk = function() {
//   console.log( "прыгает " + this.name );
// };

// var rabbit = new Rabbit("Кроль");
// rabbit.walk();
// var animal = new Animal('dog');
// animal.walk();



// function Clock(options) {
//   this._template = options.template;


// }
// Clock.prototype._render = function() {
//   var date = new Date();

//   var hours = ('0' + date.getHours()).slice(-2);
//   var min = ('0' + date.getMinutes()).slice(-2);
//   var sec = ('0' + date.getSeconds()).slice(-2);

//   var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);
//   console.log(output);
// }
// Clock.prototype.stop = function() {
//   clearInterval(this._timer);
// };

// Clock.prototype.start = function() {
//   this._render();
//   var self = this;
//   // var args = arguments;
//   this._timer = setInterval(function() {
//     // console.clear();
//     self._render();
//   }, 1000);
// }


// var clock = new Clock({
// 	template:'h:m:s'
// });
// clock.start();
// var clock2 = new Clock({
// 	template:'hz:mz:sz'
// });
// clock2.start();

// function ExtendedClock(options) {
//   Clock.apply(this, arguments);
//   this._precision = options.precision || 1000;
// }
// ExtendedClock.prototype = Object.create(Clock.prototype);
// ExtendedClock.prototype.start = function() {
//   this._render();
//   var self = this;
//   this._timer = setInterval(function() {
//     console.clear();
//     self._render();
//   }, this._precision);
// };


// var clock = new ExtendedClock({
//   template: 'h:m:s',
//   precision: 5000
// });

// clock.start();



// function Menu(state) {
//   this._state = state || this.STATE_CLOSED;
// }

// Menu.prototype.STATE_OPEN = 1;
// Menu.prototype.STATE_CLOSED = 0;


// Menu.prototype.open = function() {
//   this._state = this.STATE_OPEN;

// };

// Menu.prototype.close = function() {
//   this._state = this.STATE_CLOSED;
// };

// Menu.prototype.showState = function() {
//   console.info(this._stateAsString());
// };
// Menu.prototype._stateAsString = function(){
// 	switch(this._state){
// 		case this.STATE_OPEN:
// 			return 'open';
// 		case this.STATE_CLOSED:
// 			return 'closed';

// 	}
// };

// function AnimatingMenu() {
//   Menu.apply(this, arguments);
// }

// AnimatingMenu.prototype = Object.create(Menu.prototype);
// AnimatingMenu.prototype.constructor = Menu;

// AnimatingMenu.prototype.STATE_ANIMATING = 3;

// AnimatingMenu.prototype.open = function() {
//   this._state = this.STATE_ANIMATING;
//   var self = this;
//   var args = arguments;
//   this._timerId = setTimeout(function() {
//     Menu.prototype.open.apply(self, args);
//   }, 1000);
// };

// AnimatingMenu.prototype.close = function() {
//   clearTimeout(this._timerId);
//   Menu.prototype.close.apply(this, arguments);
// };

// AnimatingMenu.prototype._stateAsString=function(){

// 	switch(this._state){
// 		case this.STATE_ANIMATING:
// 			return 'animation';

// 		default:
// 			return Menu.prototype._stateAsString.apply(this,arguments);
// 	}
// };


// var amenu = new AnimatingMenu();
// amenu.showState();
// amenu.open();
// amenu.showState();

// setTimeout(function(){
// 	amenu.showState();
// 	amenu.close();
// 	amenu.showState();
// },1500);


// =====================Проверка класса: "instanceof"

// function Rabbit(){};

// var rabbit = new Rabbit();
// console.log(rabbit instanceof Rabbit);

// var arr = [];
// console.log(arr instanceof Array);
// console.log(arr instanceof Object);
// 1)Получить obj.__proto__
// 2)Сравнить obj.__proto__ с Constructor.prototype
// 3)Если не совпадает, тогда заменить obj на obj.__proto__
// и повторить проверку на шаге 2 до тех пор,
//  пока либо не найдется совпадение (результат true),
//   либо цепочка прототипов не закончится (результат false).

// function A() {};
// function B() {};
// A.prototype = B.prototype = {};
// var a = new A();
// console.log( a instanceof B ); // true

// function Animal() {};
// function Rabbit() {};
// Rabbit.prototype = Object.create(Animal.prototype);
// var rabbit = new Rabbit();
// console.log( rabbit instanceof Rabbit );
// console.log( rabbit instanceof Animal );
// console.log( rabbit instanceof Object );



//======================== Свои ошибки, наследование от Error

// function f() {
//   alert( new Error().stack );
// }
// f(); // выведет список вложенных вызовов, с номерами строк, где они были сделаны

// function PropertyError(property){

// 	Error.call(this,property);
// 	this.name = 'PropertyError';

// 	this.property = property;
// 	this.message = 'Error in property '+property;

// 	if(Error.captureStackTrace){
// 		Error.captureStackTrace(this,this.constructor);
// 	}else{
// 		this.stack = (new Error()).stack;
// 	}
// }

// PropertyError.prototype = Object.create(Error.prototype);
// PropertyError.prototype.constructor = PropertyError;

// function PropertyRequiredError(property){
// 	PropertyError.apply(this,arguments);
// 	this.name = 'PropertyRequiredError';
// 	this.message = 'Missing property ' + property;
// }

// PropertyRequiredError.prototype=Object.create(PropertyError.prototype);
// PropertyRequiredError.prototype.constructor = PropertyRequiredError;


// function readUser(data){
// 	var user = JSON.parse(data);

// 	if(!user.age){
// 		throw new PropertyError('age');
// 	}
// 	if(!user.name){
// 		throw new PropertyError('name');
// 	}

// 	return user;
// }

// try{

// 	var user = readUser('{"age":25}');

// }catch(err){

// 	if(err instanceof PropertyError){
// 		if(err.property == 'name'){
// 			console.warn('Anonymous');
// 		}else{
// 			console.error(err.name + ': '+err.message);
// 		}
// 	}else if(err instanceof SyntaxError){
// 		console.error('Error in syntax of data '+err.message);
// 	}else{
// 		throw err;
// 	}
// }

// var err = new PropertyRequiredError('age');
// console.log(err instanceof PropertyError);


//=========шаблон для CustomError

// общего вида "наша" ошибка
// function CustomError(message){
// 	this.name = 'CustomError';
// 	this.message = message;

// 	if(Error.captureStackTrace){
// 		Error.captureStackTrace(this,this.constructor);
// 	}else{
// 		this.stack = (new Error()).stack;
// 	}
// }

// CustomError.prototype = Object.create(Error.prototype);
// CustomError.prototype.constructor = CustomError;

// // наследник
// function PropertyError(property){
// 	CustomError.call(this,'Error in property ' +property);
// 	this.name = 'PropertyError';
// 	this.property = property;
// }

// PropertyError.prototype = Object.create(CustomError.prototype);
// PropertyError.prototype.constructor = PropertyError;

// // и ещё уровень
// function PropertyRequiredError(property){
// 	PropertyError.call(this,property);
// 	this.name = 'PropertyRequiredError';
// 	this.message = 'Missing property '+property;
// }

// PropertyRequiredError.prototype = Object.create(PropertyError.prototype);
// PropertyRequiredError.prototype.constructor = PropertyRequiredError;

// // использование
// var err = new PropertyRequiredError('age');

// console.log(err instanceof PropertyRequiredError);
// console.log(err instanceof PropertyError);
// console.log(err instanceof CustomError);
// console.log(err instanceof Error);


// function FormatError(message) {
//   this.name = 'FormatError';
//   this.message = message;

//   if (Error.captureStackTrace) {
//     Error.captureStackTrace(this, this.constructor);
//   } else {
//     this.stack = (new Error()).stack;
//   }
// }

// FormatError.prototype = Object.create(SyntaxError.prototype);
// FormatError.prototype.constructor = FormatError;

// var err = new FormatError('error in formating');
// console.log(err.message);
// console.log(err.name);
// console.log(err.stack);
// console.log(err instanceof SyntaxError);


// ===================Примеси(mixin)

//mixin
// var mixin = {
//   sayHi: function() {
//     console.log('Hi ' + this.name);
//   },
//   sayBye: function() {
//     console.log('Bye ' + this.name);
//   }
// };

// function User(name){
// 	this.name = name;
// }

// for(var key in mixin){
// 	User.prototype[key]=mixin[key];
// }

// new User('Vasya').sayHi();


// =============mixin for eventPhase

var eventMixin = {
  /**
   * Подписка на событие
   * Использование:
   *  menu.on('select', function(item) { ... }
   */
  on: function(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },
  /**
   * Прекращение подписки
   *  menu.off('select',  handler)
   */
  off: function(eventName, handler) {
    var handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) return;
    for (var i = 0; i < handlers.length; i++) {
      if (handlers[i] == handler) {
        handlers.splice(i--, 1);
      }
    }
  },
  /**
   * Генерация события с передачей данных
   *  this.trigger('select', item);
   */
  trigger: function(eventName /*,...*/ ) {
    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return;
    }
    var handlers = this._eventHandlers[eventName];
    for (var i = 0; i < handlers.length; i++) {
      handlers[i].apply(this, [].splice.call(arguments, 1));
    }
  }
};

function Menu() {
  //...
}

for (var key in eventMixin) {
  Menu.prototype[key] = eventMixin[key];
}

Menu.prototype.choose = function(value) {
  this.trigger('select', value);
}

var menu = new Menu();

menu.on('select', function(value) {
  console.log('Chosed value ' + value);
});

menu.choose('123');
