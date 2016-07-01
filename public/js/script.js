'use strict';
// ==============ООП в функциональном стиле

function CoffeeMachine(model, power, capacity) {
  this.model = model;
  const WATER_HEAT_CAPACITY = 4200;
  var self = this;
  var timerId;
  var power = power;
  var waterAmount = 0;
  Object.defineProperty(this, 'waterAmount',{value:function(amount) {
    if (amount < 0) {
      throw new Error('Значение должно быть положительным');
    }
    if (amount > capacity) {
      throw new Error('Нельзя залить воды больше, чем ' + capacity);
    }
    waterAmount = amount;
  }});

  this.getWaterAmount = function(){
  	return waterAmount;
  }


  function getBoiledTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    console.log('Coffee ready!');
  }
  this.run = function() {
    timerId = setTimeout(onReady, getBoiledTime());
  }
  this.stop = function() {
    clearTimeout(timerId);
  }
  this.getPower=function(){
  	return power;
  }

  console.log('Создана кофеварка ' + model + ' с мощностью ' + power + ' ватт');
}

var coffeeMachine = new CoffeeMachine('Redmond', 100000,500);
coffeeMachine.waterAmount(500);
// console.log(coffeeMachine);

coffeeMachine.run();


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