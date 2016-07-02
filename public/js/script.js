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


